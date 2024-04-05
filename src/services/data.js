export const data = []

// generate random names

//Functions on each button : book an appointment button
// sort by - rating, cost, opening hours, filter - vet, open now, open 24 hours, all

const PetStoreRating = [3.5, 2.8, 4, 3.2, 5, 2.5, 3.8, 2.9, 3.6, 5, 2.7, 3.3, 5, 2.6, 3.4, 2.2, 3.7]


const PetStoreContact = [
    '+91 1234567890',
    '+91 9876543210',
    '+91 8765432109',
    '+91 2345678901',
    '+91 3456789012',
    '+91 4567890123',
    '+91 5678901234',
    '+91 6789012345',
    '+91 7890123456',
    '+91 8901234567',
    '+91 9012345678',
    '+91 0123456789',
    '+91 1357924680',
    '+91 2468013579',
    '+91 3579246801',
    '+91 4680135792',
    '+91 5792468013'
]

const PetStoreTimings = [
    'Monday - Friday: 9am - 5pm',
    'Monday - Saturday: 10am - 6pm',
    'Tuesday - Sunday: 11am - 7pm',
    'Wednesday - Monday: 8am - 4pm',
    'Thursday - Sunday: 12pm - 8pm',
    'Friday - Saturday: 11am - 7pm',
    'Saturday - Sunday: 10am - 6pm',
    'Sunday - Monday: 9am - 5pm',
    'Monday - Wednesday: 10am - 6pm',
    'Tuesday - Thursday: 11am - 7pm',
    'Wednesday - Friday: 8am - 4pm',
    'Thursday - Saturday: 12pm - 8pm',
    'Friday - Sunday: 11am - 7pm',
    'Saturday - Monday: 10am - 6pm',
    'Sunday - Tuesday: 9am - 5pm',
    'Monday - Thursday: 10am - 6pm',
    'Tuesday - Friday: 11am - 7pm'
]

const PetStoreVetAvailability = [
    'Yes',
    'No',
    'No',
    'Yes',
    'Yes',
    'No',
    'Yes',
    'No',
    'Yes',
    'No',
    'No',
    'Yes',
    'Yes',
    'No',
    'Yes',
    'No',
    'Yes'
]

const PetStoreLocations = [
    'Mumbai, Maharashtra',
    'Kolkata, West Bengal',
    'Chennai, Tamil Nadu',
    'Bengaluru, Karnataka',
    'Hyderabad, Telangana',
    'Jaipur, Rajasthan',
    'Lucknow, Uttar Pradesh',
    'Ahmedabad, Gujarat',
    'une, Maharashtra',
    'Patna, Bihar',
    'Kochi, Kerala',
    'Bhopal, Madhya Pradesh',
    'Chandigarh, Chandigarh',
    'Guwahati, Assam',
    'Indore, Madhya Pradesh',
    'Dehradun, Uttarakhand',
    'Raipur, Chhattisgarh'
]

const PetStoreNames = [
    "Pam Purred Pets",
    "Pawsitively Purrfect",
    "Paws 'n Claws",
    "Pet City",
    "Pet Co",
    "Pet Coach",
    "Pet Land",
    "Petopia",
    "Pets At Home",
    "Pet Shop",
    "Pet Smart",
    "Pet Stock",
    "Pet Stop",
    "Pet Vet",
    "Puppy Love",
    "Purrfect Pet Care",
    "Ren's Pets"
]

const PetStorePics = [
    "/petStorePics/PamPurredPets.jpg",
    "/petStorePics/PawsitelyPurrfect.avif",
    "/petStorePics/PawsnClaws.avif",
    "/petStorePics/PetCity.webp",
    "/petStorePics/PetCo.jpeg",
    "/petStorePics/PetCoach.jpeg",
    "/petStorePics/PetLand.jpg",
    "/petStorePics/Petopia.png",
    "/petStorePics/PetsAtHoem.jpg",
    "/petStorePics/PetShop.jpg",
    "/petStorePics/PetSmart.jpeg",
    "/petStorePics/PetStock.webp",
    "/petStorePics/PetStop.jpg",
    "/petStorePics/PetVet.jpg",
    "/petStorePics/PuppyLove.jpg",
    "/petStorePics/PurrfectPetCare.jpg",
    "/petStorePics/RensPets.jpeg"
]

// Generate 50 sample profiles
for (let i = 1; i <= PetStoreNames.length; i++) {
    if (PetStoreNames[i]) {
        const profile = {
            photo: PetStorePics[i],
            name: PetStoreNames[i],
            location: PetStoreLocations[i],
            vetAvailable: PetStoreVetAvailability[i],
            rating: PetStoreRating[i],
            contact: PetStoreContact[i],
            timings: PetStoreTimings[i],
        }
        data.push(profile)
    } else {
        console.error("Please wait...")
    }
}
