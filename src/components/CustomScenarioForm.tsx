import React, { useState } from 'react';
import { CustomScenarioInput } from '../data/scenarios';
import './CustomScenarioForm.css';

interface CustomScenarioFormProps {
  onSubmit: (input: CustomScenarioInput) => void;
  onBack: () => void;
}

const CustomScenarioForm: React.FC<CustomScenarioFormProps> = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState<CustomScenarioInput>({
    jobTitle: '',
    companyType: '',
    salaryRange: '',
    industry: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.jobTitle && formData.companyType && formData.industry) {
      onSubmit(formData);
    }
  };

  const isValid = formData.jobTitle && formData.companyType && formData.industry;

  return (
    <div className="custom-scenario-form">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <h2>Create Your Interview</h2>
      <p className="form-description">
        Enter details about the job you're applying for to practice a realistic interview.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title *</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="e.g., Software Developer, Marketing Manager"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="industry">Industry *</label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          >
            <option value="">Select an industry</option>
            <option value="Technology">Technology</option>
            <option value="Finance & Banking">Finance & Banking</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Retail">Retail</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Education">Education</option>
            <option value="Construction">Construction</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Government">Government</option>
            <option value="Non-profit">Non-profit</option>
            <option value="Media & Entertainment">Media & Entertainment</option>
            <option value="Professional Services">Professional Services</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="companyType">Company Type *</label>
          <select
            id="companyType"
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
            required
          >
            <option value="">Select company type</option>
            <option value="startup">Startup (under 50 employees)</option>
            <option value="small business">Small Business (50-200 employees)</option>
            <option value="mid-sized company">Mid-sized Company (200-1000 employees)</option>
            <option value="large corporation">Large Corporation (1000+ employees)</option>
            <option value="government agency">Government Agency</option>
            <option value="non-profit organisation">Non-profit Organisation</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="salaryRange">Expected Salary Range (optional)</label>
          <input
            type="text"
            id="salaryRange"
            name="salaryRange"
            value={formData.salaryRange}
            onChange={handleChange}
            placeholder="e.g., $70,000-$85,000"
          />
          <span className="help-text">This helps make salary discussions realistic</span>
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={!isValid}
        >
          Start Interview Practice
        </button>
      </form>
    </div>
  );
};

export default CustomScenarioForm;
