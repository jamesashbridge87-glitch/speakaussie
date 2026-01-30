#!/bin/bash

API_KEY="b6b0085b-7192-4022-8c31-6dd826369bfe"
MODEL_ID="b2614463-296c-462a-9586-aafdb8f00e36"
ICONS_DIR="/Users/james/Documents/aussie-english-practice/public/icons"
BASE_URL="https://cloud.leonardo.ai/api/rest/v1"
IDS_FILE="/tmp/leonardo_gen_ids.txt"

mkdir -p "$ICONS_DIR"
> "$IDS_FILE"

# Icons array
ICONS=(
    "target|a target bullseye"
    "rocket|a rocket ship"
    "briefcase|a briefcase"
    "bar-chart|a bar chart graph"
    "chart-up|an upward trending line chart"
    "celebration|a party popper with confetti"
    "phone|a telephone handset"
    "wave|a waving hand"
    "microphone|a handheld microphone"
    "money|a money bag with dollar sign"
    "handshake|two hands shaking"
    "clipboard|a clipboard with paper"
    "hand-raised|a person raising their hand"
    "dining|a plate with fork and knife"
    "coffee|a coffee cup with steam"
    "lightbulb|a light bulb"
    "beer|a beer mug"
    "laptop|a laptop computer"
    "thinking|a thinking face with hand on chin"
    "christmas|a christmas tree"
    "sunrise|a sunrise over horizon"
    "notepad|a notepad with pencil"
    "tulip|a tulip flower"
    "email|an email envelope"
    "happy|a happy smiling face"
    "speech|a speech bubble"
    "cheers|two beer mugs clinking"
    "smirk|a smirking face"
    "refresh|two circular rotating arrows"
    "fire|fire flames"
    "lightning|a lightning bolt"
    "trophy|a trophy cup"
    "speaking|a speaking head profile"
    "hundred|the number 100"
    "stopwatch|a stopwatch timer"
    "hourglass|an hourglass"
    "clock|a clock face"
    "house|a house"
    "kangaroo|a kangaroo"
    "star-glow|a glowing star with rays"
    "studio-mic|a studio microphone"
    "calendar|a calendar"
    "seedling|a small plant seedling"
    "crown|a royal crown"
    "footprints|footprints"
    "star|a five pointed star"
    "muscle|a flexed bicep arm"
    "books|a stack of books"
    "bug|a bug insect"
    "masks|theater drama masks"
    "pray|two hands pressed together praying"
    "australia|australian map outline with southern cross stars"
    "lock|a padlock"
    "heart|a heart shape"
    "heart-outline|a heart outline"
    "speaker|a speaker with sound waves"
    "question|a question mark"
    "thumbsup|a thumbs up hand"
    "repeat|a repeat loop symbol with arrows"
    "cards|index cards"
    "globe|a globe showing australia"
    "sparkles|sparkle stars"
    "anxious|an anxious worried face"
    "smile|a gentle smiling face"
    "cool|a face wearing sunglasses"
    "pin|a location map pin"
    "document|a document page"
    "printer|a printer"
)

echo "=== Leonardo AI Icon Generation ==="
echo "Total icons to generate: ${#ICONS[@]}"
echo ""

# Submit all generation jobs
echo "Submitting generation jobs..."
for i in "${!ICONS[@]}"; do
    IFS='|' read -r filename subject <<< "${ICONS[$i]}"

    PROMPT="Flat minimalist white icon of ${subject}, simple silhouette, clean vector style, centered, solid white on pure black background, no shadows, no gradients, app icon, single object"

    RESPONSE=$(curl -s -X POST "${BASE_URL}/generations" \
        -H "Authorization: Bearer ${API_KEY}" \
        -H "Content-Type: application/json" \
        -d "{\"modelId\":\"${MODEL_ID}\",\"prompt\":\"${PROMPT}\",\"width\":512,\"height\":512,\"num_images\":1}")

    GEN_ID=$(echo "$RESPONSE" | jq -r '.sdGenerationJob.generationId // empty')

    if [ -n "$GEN_ID" ]; then
        echo "${filename}|${GEN_ID}" >> "$IDS_FILE"
        echo "[$((i+1))/${#ICONS[@]}] Submitted: $filename"
    else
        echo "[$((i+1))/${#ICONS[@]}] FAILED: $filename - $RESPONSE"
    fi

    sleep 0.3
done

echo ""
echo "All jobs submitted. Waiting 45 seconds for generations to complete..."
sleep 45

# Download all icons
echo ""
echo "Downloading generated icons..."
SUCCESS=0
FAILED=0

while IFS='|' read -r filename gen_id; do
    RESULT=$(curl -s -X GET "${BASE_URL}/generations/${gen_id}" \
        -H "Authorization: Bearer ${API_KEY}")

    GEN_STATUS=$(echo "$RESULT" | jq -r '.generations_by_pk.status // empty')

    if [ "$GEN_STATUS" = "COMPLETE" ]; then
        IMG_URL=$(echo "$RESULT" | jq -r '.generations_by_pk.generated_images[0].url // empty')
        if [ -n "$IMG_URL" ]; then
            curl -s -o "${ICONS_DIR}/icon-${filename}.jpg" "$IMG_URL"
            echo "✓ Downloaded: icon-${filename}.jpg"
            ((SUCCESS++))
        else
            echo "✗ FAILED (no URL): $filename"
            ((FAILED++))
        fi
    else
        echo "✗ FAILED (status: $GEN_STATUS): $filename"
        # Save for retry
        echo "${filename}|${gen_id}" >> /tmp/leonardo_retry.txt
        ((FAILED++))
    fi
done < "$IDS_FILE"

echo ""
echo "=== Generation Complete ==="
echo "Success: $SUCCESS"
echo "Failed: $FAILED"
