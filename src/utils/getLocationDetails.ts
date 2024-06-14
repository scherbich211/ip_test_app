export async function getLocationDetails(ip_public: string) {
  try {
    const response = await fetch(`https://ipwho.is/${ip_public}`);
    const data = await response.json();
    // Assuming response structure:
    const {ip, city, country_code, timezone, connection} = data;
    return {ip, location: `${city}, ${country_code}`, utc: timezone.utc, isp: connection.isp}; // Transform response to desired object
  } catch (error) {
    console.error('Error fetching location details:', error);
    throw error;
  }
}