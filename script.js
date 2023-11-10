document.addEventListener('DOMContentLoaded', function () {
    const trivia = [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
        "Cats have five toes on their front paws but only four toes on their back paws.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "Bananas are berries, but strawberries aren't. In botanical terms, a berry is a fleshy fruit produced from a single ovary, and bananas qualify.",
        "Octopuses have three hearts. Two pump blood to the gills, and one pumps it to the rest of the body.",
        "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron when it's hot.",
        "A group of flamingos is called a 'flamboyance.'",
        "The world's largest desert is not the Sahara but Antarctica.",
        "The Great Wall of China is not visible from the Moon with the naked eye.",
        "Hippopotamus milk is pink.",
        "The longest word without a vowel is 'rhythms.'",
        "A 'jiffy' is an actual unit of time, equivalent to 1/100th of a second.",
        "Hawaii is the only U.S. state with a tropical rainforest.",
        "The average person will spend six months of their life waiting for red lights to turn green.",
        "There are more possible iterations of a game of chess than there are atoms in the known universe.",
        "The first computer programmer was a woman named Ada Lovelace.",
        "Peanuts are not nuts; they are legumes.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "An adult human is made up of approximately 7,000,000,000,000,000,000,000,000,000 (7 octillion) atoms.",
        "Bananas are berries, but strawberries aren't. In botanical terms, a berry is a fleshy fruit produced from a single ovary, and bananas qualify.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "A group of flamingos is called a 'flamboyance.'",
        "The world's largest desert is not the Sahara but Antarctica.",
        "The Great Wall of China is not visible from the Moon with the naked eye.",
        "Hippopotamus milk is pink.",
        "The longest word without a vowel is 'rhythms.'",
        "A 'jiffy' is an actual unit of time, equivalent to 1/100th of a second.",
        "Hawaii is the only U.S. state with a tropical rainforest.",
        "The average person will spend six months of their life waiting for red lights to turn green.",
        "There are more possible iterations of a game of chess than there are atoms in the known universe.",
        "The first computer programmer was a woman named Ada Lovelace.",
        "Peanuts are not nuts; they are legumes.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "An adult human is made up of approximately 7,000,000,000,000,000,000,000,000,000 (7 octillion) atoms.",
        "Bananas are berries, but strawberries aren't. In botanical terms, a berry is a fleshy fruit produced from a single ovary, and bananas qualify.",
        "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
        "A group of flamingos is called a 'flamboyance.'",
        "The world's largest desert is not the Sahara but Antarctica.",
        "The Great Wall of China is not visible from the Moon with the naked eye.",
        "Hippopotamus milk is pink.",
        "The longest word without a vowel is 'rhythms.'",
        "A 'jiffy' is an actual unit of time, equivalent to 1/100th of a second.",
        "Hawaii is the only U.S. state with a tropical rainforest.",
        "The average person will spend six months of their life waiting for red lights to turn green.",
        "There are more possible iterations of a game of chess than there are atoms in the known universe.",
        "The first computer programmer was a woman named Ada Lovelace.",
        "Peanuts are not nuts; they are legumes."
    ];

    const generateBtn = document.getElementById('generateBtn');
    const triviaDisplay = document.getElementById('triviaDisplay');

    let colorIndex = 0;

    generateBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * trivia.length);
        const randomTrivia = trivia[randomIndex];
        triviaDisplay.textContent = randomTrivia;

        const backgroundColors = ["#ff64bf", "#fcef22", "#06b8ba"];

        triviaDisplay.style.backgroundColor = backgroundColors[colorIndex];

        colorIndex = (colorIndex + 1) % backgroundColors.length;
    });

});
