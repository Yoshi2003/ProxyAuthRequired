import json
import logging
from API.AI import client
import os
from openai import OpenAI

logger = logging.getLogger(__name__)

def generate_interactive_questions(scenario_text):
    """
    Generate interactive questions for users based on the scenario text.
    Returns a list of question dictionaries.
    """
    questions = []

    try:
        prompt = (
            f"Based on this scenario: {scenario_text}, generate exactly three engaging and challenging multiple-choice questions "
            "that require critical thinking. For each question, provide four options labeled \"A\", \"B\", \"C\", and \"D\". "
            "Ensure that the keys in the options object are only the letters \"A\", \"B\", \"C\", and \"D\", and the values are the option texts without the letters. "
            "Indicate the correct answer by specifying only the option letter (e.g., \"D\"). Additionally, provide a concise explanation for the correct answer. "
            "The output must be a valid JSON array formatted exactly as shown below, with no additional text:\n\n"
            "[\n"
            "  {\n"
            "    \"question\": \"Question text\",\n"
            "    \"options\": {\n"
            "      \"A\": \"Option A\",\n"
            "      \"B\": \"Option B\",\n"
            "      \"C\": \"Option C\",\n"
            "      \"D\": \"Option D\"\n"
            "    },\n"
            "    \"correct_answer\": \"B\",\n"
            "    \"explanation\": \"Explanation text\"\n"
            "  },\n"
            "  // ... two more questions\n"
            "]\n"
        )

        response = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model="gpt-4",
            max_tokens=800,
            temperature=0.7,
        )

        content = response.choices[0].message.content.strip()

        # Attempt to parse JSON
        try:
            openai_generated_questions = json.loads(content)
            # Validate and append questions
            for q in openai_generated_questions:
                if (
                    isinstance(q, dict) and
                    'question' in q and
                    'options' in q and
                    'correct_answer' in q and
                    'explanation' in q
                ):
                    # Ensure options are properly formatted
                    if isinstance(q['options'], dict) and all(k in q['options'] for k in ['A', 'B', 'C', 'D']):
                        questions.append(q)
                    else:
                        logger.warning(f"Invalid options format in question: {q}")
                else:
                    logger.warning(f"Invalid question format: {q}")
        except json.JSONDecodeError as je:
            logger.error(f"JSON decode error: {je}")
            logger.error(f"Content received: {content}")

    except Exception as e:
        logger.error(f"Error generating dynamic questions using OpenAI: {e}")

    return questions

