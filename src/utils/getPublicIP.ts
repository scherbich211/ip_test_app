export async function getPublicIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip; // Assuming IP is in 'ip' property
  } catch (error) {
    console.error('Error fetching public IP:', error);
    throw error;
  }
}