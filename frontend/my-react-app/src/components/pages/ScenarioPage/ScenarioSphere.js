import React, { useState, useRef, useEffect } from 'react';
import './ScenarioSphere.css';
import { ATTACK_TYPES } from './attacks'; 


const ENDPOINT = "/api";

const ScenarioSphere = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [industry, setIndustry] = useState("Finance");
  const [attackType, setAttackType] = useState("");
  const [skillLevel, setSkillLevel] = useState("Script Kiddie");
  const [threatIntensity, setThreatIntensity] = useState(50);
  const [generatedScenario, setGeneratedScenario] = useState("");
  const [interactiveQuestions, setInteractiveQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  // States for Autocomplete
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showAllSuggestions, setShowAllSuggestions] = useState(false); 
  const suggestionsRef = useRef(null);

  // Handle clicks outside the suggestions dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setActiveSuggestionIndex(-1);
        setShowAllSuggestions(false); // Reset to default when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleGenerateClick = () => {
    // Validate input fields before making the API call
    if (!attackType.trim()) {
      alert("Please enter the Type of Attack.");
      return;
    }

    setIsGenerating(true);

    const data = {
      industry,
      attack_type: attackType,
      skill_level: skillLevel,
      threat_intensity: threatIntensity,
    };

    fetch(`${ENDPOINT}/scenario/generate_scenario`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received data:", data); // Debugging line
        setGeneratedScenario(data.scenario);
        setInteractiveQuestions(data.interactive_questions || []);
        console.log("Interactive Questions:", data.interactive_questions); // Debugging line
        setIsGenerating(false);
        setUserAnswers({});
        setFeedback({});
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("An error occurred while generating the scenario. Please try again.");
        setIsGenerating(false);
      });
  };

  const handleAnswerSelect = (questionIndex, selectedOption) => {
    const question = interactiveQuestions[questionIndex];
    const isCorrect = selectedOption === question.correct_answer;

    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));

    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [questionIndex]: {
        isCorrect,
        explanation: question.explanation,
      },
    }));
  };

  const renderQuestions = () => {
    return interactiveQuestions.map((question, index) => (
      <div key={index} className="question-container">
        <p className="question-text">{index + 1}. {question.question}</p>
        <div className="options-container">
          {Object.entries(question.options).map(([optionLetter, optionText]) => (
            <label key={optionLetter} className="option-label">
              <input
                type="radio"
                name={`question-${index}`}
                value={optionLetter}
                checked={userAnswers[index] === optionLetter}
                onChange={() => handleAnswerSelect(index, optionLetter)}
                disabled={userAnswers.hasOwnProperty(index)}
              />
              <span className="option-text">{optionLetter}) {optionText}</span>
            </label>
          ))}
        </div>
        {feedback.hasOwnProperty(index) && (
          <div className={`feedback ${feedback[index].isCorrect ? 'correct' : 'incorrect'}`}>
            {feedback[index].isCorrect ? "✅ Correct!" : "❌ Incorrect."}
            <p className="explanation">Explanation: {feedback[index].explanation}</p>
          </div>
        )}
      </div>
    ));
  };

  // Handle input changes for the "Type of Attack" field
  const handleAttackTypeChange = (e) => {
    const userInput = e.target.value;
    setAttackType(userInput);
    setShowAllSuggestions(false); // Reset to default when user types

    if (userInput.length > 0) {
      const filteredSuggestions = ATTACK_TYPES.filter(
        (attack) =>
          attack.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setActiveSuggestionIndex(-1);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setAttackType(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
    setActiveSuggestionIndex(-1);
    setShowAllSuggestions(false); // Reset after selection
  };

  // Handle "Show all options" click
  const handleShowAllSuggestionsClick = () => {
    setShowAllSuggestions(true);
  };

  // Handle keyboard navigation in suggestions
  const handleKeyDown = (e) => {
    if (showSuggestions) {
      if (e.key === 'ArrowDown') {
        if (activeSuggestionIndex < (showAllSuggestions ? suggestions.length - 1 : Math.min(suggestions.length, 10) - 1)) {
          setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
      } else if (e.key === 'ArrowUp') {
        if (activeSuggestionIndex > 0) {
          setActiveSuggestionIndex(activeSuggestionIndex - 1);
        }
      } else if (e.key === 'Enter') {
        if (activeSuggestionIndex >= 0 && activeSuggestionIndex < (showAllSuggestions ? suggestions.length : Math.min(suggestions.length, 10))) {
          setAttackType(suggestions[activeSuggestionIndex]);
          setSuggestions([]);
          setShowSuggestions(false);
          setActiveSuggestionIndex(-1);
          setShowAllSuggestions(false); // Reset after selection
          e.preventDefault();
        }
      } else if (e.key === 'Escape') {
        setShowSuggestions(false);
        setActiveSuggestionIndex(-1);
        setShowAllSuggestions(false); // Reset on escape
      }
    }
  };

  return (
    <div className="scenario-body">
      <div className="scenario-container">
        <div className="scenario-input-section">
          <h1 className="scenario-title">Scenario Sphere</h1>
          <p className="scenario-tagline">Step into the real world of cyber defense...</p>

          {/* Industry Selection */}
          <div className="scenario-input-wrapper">
            <label htmlFor="industry-select">Industry</label>
            <select 
              id="industry-select"
              className="scenario-input-field scenario-industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Retail">Retail</option>
              <option value="Technology">Technology</option>
              <option value="Energy">Energy</option>
              <option value="Education">Education</option>
              <option value="Supply Chain">Supply Chain</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Pharmaceutical">Pharmaceutical</option>
              <option value="Transportation">Transportation</option>
              <option value="Cybersecurity Company">Cybersecurity Company</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="CYBERPUNK2077">CYBERPUNK2077</option>
            </select>
          </div>

          {/* Type of Attack with Autocomplete */}
          <div className="scenario-input-wrapper" ref={suggestionsRef}>
            <label htmlFor="attack-type-input">Type of Attack</label>
            <input
              id="attack-type-input"
              type="text"
              className="scenario-input-field scenario-attack-type"
              placeholder="Enter Attack Type"
              value={attackType}
              onChange={handleAttackTypeChange}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (attackType.length > 0 && suggestions.length > 0) {
                  setShowSuggestions(true);
                }
              }}
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="suggestions-list">
                { (showAllSuggestions ? suggestions : suggestions.slice(0, 10)).map((suggestion, index) => (
                  <li
                    key={suggestion}
                    className={index === activeSuggestionIndex ? 'suggestion-active' : ''}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
                {!showAllSuggestions && suggestions.length > 10 && (
                  <li
                    className="show-all-suggestions"
                    onClick={handleShowAllSuggestionsClick}
                  >
                    Show all options
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Skill Level Selection */}
          <div className="scenario-input-wrapper">
            <label htmlFor="skill-level-select">Skill Level</label>
            <select
              id="skill-level-select"
              className="scenario-input-field scenario-skill-level"
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
            >
              <option value="Script Kiddie">Script Kiddie</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="APT">APT</option>
            </select>
          </div>

          {/* Threat Intensity Slider */}
          <div className="scenario-input-wrapper">
            <label htmlFor="threat-intensity-slider">Threat Intensity</label>
            <input
              id="threat-intensity-slider"
              type="range"
              min="1"
              max="100"
              className="scenario-input-slider"
              value={threatIntensity}
              onChange={(e) => setThreatIntensity(e.target.value)}
            />
            <span className="threat-intensity-value">{threatIntensity}</span>
          </div>

          {/* Generate Button and Loading Sphere */}
          <div className="button-and-sphere">
            <button
              className="scenario-generate-button"
              onClick={handleGenerateClick}
              disabled={isGenerating}
            >
              {isGenerating ? "Generating..." : "Generate Scenario"}
            </button>
            {isGenerating && (
              <div className="loading-sphere"></div>
            )}
          </div>
        </div>

        {/* Scenario Output */}
        <div className="scenario-output-container">
          {generatedScenario && (
            <>
              <h2 className="scenario-output-title">Generated Scenario</h2>
              <div className="scenario-output-box">{generatedScenario}</div>
            </>
          )}
          {!generatedScenario && (
            <div className="scenario-output-box">
              hidden-pr0cess.axx
            </div>
          )}

          {/* Interactive Questions */}
          {interactiveQuestions && interactiveQuestions.length > 0 && (
            <div className="interactive-questions">
              <h3>Interactive Questions</h3>
              {renderQuestions()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScenarioSphere;

