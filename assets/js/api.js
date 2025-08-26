
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/LuketeS/portfolio-lucas-de-santana-schmalz/refs/heads/main/assets/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
