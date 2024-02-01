export async function fetchCrew() {
  try {
    const res = await fetch(
      "https://exiviuz.github.io/space-tourism-api/crew.json"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDestinations() {
  try {
    const res = await fetch(
      "https://exiviuz.github.io/space-tourism-api/destinations.json"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTechnologies() {
  try {
    const res = await fetch(
      "https://exiviuz.github.io/space-tourism-api/technology.json"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
