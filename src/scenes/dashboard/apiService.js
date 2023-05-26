// apiService.js

//const BASE_URL = 'https://api.example.com';//[to provide the link of the API]

// apiService.js

// Function to fetch students count
export const fetchStudentsCount = async () => {
  try {
    const response = await fetch('/api/students/count');
    if (response.ok) {
      const data = await response.json();
      return data.count;
    } else {
      throw new Error('Failed to fetch students count');
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Function to fetch teachers count
export const fetchTeachersCount = async () => {
  try {
    const response = await fetch('/api/teachers/count');
    if (response.ok) {
      const data = await response.json();
      return data.count;
    } else {
      throw new Error('Failed to fetch teachers count');
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// Function to fetch events count
export const fetchEventsCount = async () => {
  try {
    const response = await fetch('/api/events/count');
    if (response.ok) {
      const data = await response.json();
      return data.count;
    } else {
      throw new Error('Failed to fetch events count');
    }
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};
