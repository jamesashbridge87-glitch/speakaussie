#!/bin/bash

API_KEY="b6b0085b-7192-4022-8c31-6dd826369bfe"
BASE_URL="https://cloud.leonardo.ai/api/rest/v1"

# Function to generate an icon
generate_icon() {
    local subject="$1"
    local filename="$2"

    echo "Generating icon for: $subject"

    # Create generation request
    response=$(curl -s -X POST "${BASE_URL}/generations" \
        -H "Authorization: Bearer ${API_KEY}" \
        -H "Content-Type: application/json" \
        -d "{
            \"modelId\": \"ideogram-v3.0\",
            \"prompt\": \"Flat minimalist white icon of ${subject}, simple silhouette, clean vector style, centered, solid white on transparent background, no shadows, no gradients, app icon, single object\",
            \"width\": 512,
            \"height\": 512,
            \"num_images\": 1,
            \"promptEnhance\": false
        }")

    echo "Response: $response"

    # Extract generation ID
    gen_id=$(echo "$response" | jq -r '.sdGenerationJob.generationId // .generationId // empty')

    if [ -z "$gen_id" ]; then
        echo "Error: Could not get generation ID"
        echo "Full response: $response"
        return 1
    fi

    echo "Generation ID: $gen_id"
    echo "Waiting for generation to complete..."

    # Poll for completion (max 60 seconds)
    for i in {1..12}; do
        sleep 5
        result=$(curl -s -X GET "${BASE_URL}/generations/${gen_id}" \
            -H "Authorization: Bearer ${API_KEY}")

        status=$(echo "$result" | jq -r '.generations_by_pk.status // empty')
        echo "Status: $status"

        if [ "$status" = "COMPLETE" ]; then
            # Get image URL
            image_url=$(echo "$result" | jq -r '.generations_by_pk.generated_images[0].url // empty')

            if [ -n "$image_url" ]; then
                echo "Downloading image..."
                curl -s -o "../public/icons/${filename}" "$image_url"
                echo "Saved to: public/icons/${filename}"
                return 0
            fi
        fi
    done

    echo "Timeout waiting for generation"
    return 1
}

cd "$(dirname "$0")"

# Test 3 icons
echo "=== Testing Leonardo AI Icon Generation ==="
echo ""

generate_icon "a kangaroo" "icon-kangaroo.png"
echo ""

generate_icon "a briefcase" "icon-briefcase.png"
echo ""

generate_icon "fire flames" "icon-fire.png"
echo ""

echo "=== Done ==="
