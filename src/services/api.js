const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function submitContactForm(data) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(15000),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to submit the form. Please try again.');
  }

  return result;
}

export async function checkHealth() {
  const response = await fetch(`${API_BASE_URL}/api/health`, {
    signal: AbortSignal.timeout(5000),
  });
  return response.json();
}

