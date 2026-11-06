const defaultProdApiUrl = 'https://be-rbb-demo.rising-beyond-border.workers.dev';
const rawBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? defaultProdApiUrl : '');

// Clean up trailing slashes and any accidental '/api' suffix
const cleanBaseUrl = rawBaseUrl.trim().replace(/\/+$/, '').replace(/\/api$/, '');

export async function submitContactForm(data) {
  const url = `${cleanBaseUrl}/api/contact`;

  let response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(15000),
    });
  } catch (err) {
    if (err.name === 'TimeoutError') {
      throw new Error('Connection timed out. The server took too long to respond.');
    }
    throw new Error(err.message || 'Network error: Unable to reach backend API.');
  }

  // Safely parse JSON or text error
  let result = null;
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    try {
      result = await response.json();
    } catch {
      result = null;
    }
  }

  if (!response.ok) {
    if (result && result.error) {
      throw new Error(result.error);
    }
    if (response.status === 404) {
      throw new Error(
        `API endpoint returned 404 at ${url}. Please verify VITE_API_BASE_URL is configured in Cloudflare Pages and redeploy.`
      );
    }
    if (response.status === 403) {
      throw new Error(result?.error || 'Security verification failed. Please try again.');
    }
    const textBody = await response.text().catch(() => '');
    throw new Error(textBody || `Server returned error status ${response.status}. Please try again later.`);
  }

  return result || { success: true, message: 'Message sent successfully.' };
}

export async function checkHealth() {
  const url = `${cleanBaseUrl}/api/health`;
  const response = await fetch(url, {
    signal: AbortSignal.timeout(5000),
  });
  return response.json();
}
