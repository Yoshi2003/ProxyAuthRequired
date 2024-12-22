import os
import logging
from API.AI import client

# Set up logging
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

def generate_email_content(subject, prompt):
    """
    Generate email content based on the given subject and prompt.
    
    Args:
        subject (str): The subject of the email content to be generated.
        prompt (str): The specific prompt to guide the email content generation.
    
    Returns:
        str: The generated email content.
    """
    try:
        response = client.chat.completions.create(
            messages=[{"role": "user", "content": prompt}],
            model="gpt-4o",
            max_tokens=1000,
            temperature=0.7,
        )
        return response.choices[0].message.content.strip()

    except Exception as e:
        logger.error(f"Error generating email content: {e}")
        return "An error occurred while generating the email content."

def generate_daily_email(subject, frequency):
    """
    Generate daily email content based on the subject and frequency.
    
    Args:
        subject (str): The subject for the daily email content.
        frequency (int): Frequency (1-4) representing how many times an email should be generated in a day.
    
    Returns:
        List[str]: A list of generated email content for each instance in the frequency.
    """
    prompt = (
        f"Create an engaging and educational email about the topic '{subject}', designed for daily subscribers interested in learning about this subject. "
        "The email should be structured with a clear introduction, 2-3 actionable tips or insights, and a conclusion with a motivational or thought-provoking statement. "
        "Incorporate unique examples, analogies, or real-world scenarios related to the topic to make it memorable and engaging. "
        "Ensure the content is easy to read and provides value for both beginners and advanced learners. "
        "Each email should be slightly different, using new examples, insights, or perspectives to keep the series fresh and engaging over time."
        "Do not excplicity mention you are an AI or mention that you will do what I ask. Aslo do not mention subscribers or anything"
        "At the end of the email replace - Best regards, [Your Name] [Your Position] [Your Contact Information] with - Respectfully, CarterPerez, Dev, CarterPerez-dev@proxyauthrequired.com"
    )

    try:
        generated_emails = []
        for _ in range(frequency):
            response = client.chat.completions.create(
                messages=[{"role": "user", "content": prompt}],
                model="gpt-4o",
                max_tokens=1000,
                temperature=0.7,
            )
            generated_emails.append(response.choices[0].message.content.strip())

        return generated_emails

    except Exception as e:
        logger.error(f"Error generating daily email content: {e}")
        return ["An error occurred while generating the daily email content."]

