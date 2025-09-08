// DOM Elements
const form = document.getElementById('monster-form');
const generateBtn = document.getElementById('generate-card');
const downloadBtn = document.getElementById('download-card');
const languageSelect = document.getElementById('language-select');

// Translation system
const translations = {
    en: {
        'app-title': 'D&D Monster Card Maker',
        'app-subtitle': 'Craft legendary creature cards for your adventures',
        'monster-info': 'Creature Details',
        'monster-name': 'Creature Name:',
        'monster-name-placeholder': 'Enter the creature\'s name',
        'monster-type': 'Type & Size:',
        'monster-type-placeholder': 'e.g., Large dragon, chaotic evil',
        'type-aberration': '🧠 Aberration',
        'type-beast': '🐾 Beast',
        'type-celestial': '☀ Celestial',
        'type-construct': '⚙ Construct',
        'type-dragon': '🐲 Dragon',
        'type-elemental': '🔥 Elemental',
        'type-fey': '🧚 Fey',
        'type-fiend': '👹 Fiend',
        'type-giant': '⛰ Giant',
        'type-humanoid': '👤 Humanoid',
        'type-monstrosity': '🐙 Monstrosity',
        'type-ooze': '🟫 Ooze',
        'type-plant': '🌱 Plant',
        'type-undead': '☠ Undead',
        'type-custom': '📝 Custom',
        'armor-class': 'Armor Class:',
        'armor-class-placeholder': 'e.g., 18 (Natural Armor)',
        'hit-points': 'Hit Points:',
        'hit-points-placeholder': 'e.g., 256 (19d20 + 57)',
        'speed': 'Speed:',
        'speed-placeholder': 'e.g., 40 ft., fly 80 ft., swim 40 ft.',
        'challenge-rating': 'Challenge Rating:',
        'challenge-rating-placeholder': 'e.g., 17 (18,000 XP)',
        'monster-image': 'Image URL:',
        'monster-image-placeholder': 'https://example.com/monster.jpg',
        'monster-image-upload': 'Or Upload Image:',
        'monster-upload-placeholder': 'Choose image file...',
        'card-customization': 'Card Customization',
        'card-color': 'Card Color Theme:',
        'color-classic': 'Classic Brown',
        'color-red': 'Red (Fire/Dragons)',
        'color-blue': 'Blue (Water/Ice)',
        'color-green': 'Green (Nature/Beasts)',
        'color-black': 'Black (Undead/Fiends)',
        'color-white': 'White (Celestials/Light)',
        'color-purple': 'Purple (Aberrations/Psychic)',
        'color-metal': 'Metal (Constructs/Machines)',
        'color-gold': 'Gold (Legendary)',
        'card-logo': 'Card Type Logo:',
        'logo-none': 'No Logo',
        'logo-fire': 'Fire',
        'logo-water': 'Water',
        'logo-nature': 'Nature',
        'logo-lightning': 'Lightning',
        'logo-hammer': 'Hammer/Forge',
        'logo-combat': 'Combat',
        'logo-defense': 'Defense',
        'logo-death': 'Death/Undead',
        'logo-magic': 'Magic',
        'logo-royal': 'Royal/Noble',
        'logo-dragon': 'Dragon',
        'logo-night': 'Night/Shadow',
        'logo-light': 'Light/Holy',
        'logo-mind': 'Mind/Psychic',
        'logo-mechanical': 'Mechanical',
        'image-position': 'Image Position:',
        'horizontal': 'Horizontal:',
        'vertical': 'Vertical:',
        'scale': 'Scale:',
        'reset-position': 'Reset Position',
        'special-abilities': 'Special Abilities:',
        'actions': 'Actions:',
        'formatting-help': 'Use **bold**, *italic*, or ***bold italic*** for formatting',
        'special-abilities-placeholder': 'Enter special abilities, one per line. Use **bold** and *italic* formatting.',
        'actions-placeholder': 'Enter actions, one per line. Use **bold** and *italic* formatting.',
        'generate-card': 'Generate Card',
        'card-preview': 'Card Preview',
        'download-card': 'Download Card',
        'card-back-options': 'Card Back Options',
        'card-back-type': 'Back Type:',
        'back-logo': 'Logo Only (same color)',
        'back-image': 'Custom Image',
        'back-empty': 'Empty/Transparent',
        'back-text-overflow': 'Text Overflow (for long descriptions)',
        'back-image-url': 'Back Image URL:',
        'back-image-placeholder': 'https://example.com/back-image.jpg',
        'back-image-upload': 'Or Upload Image:',
        'back-upload-placeholder': 'Choose image file...',
        'str': 'STR:',
        'dex': 'DEX:',
        'con': 'CON:',
        'int': 'INT:',
        'wis': 'WIS:',
        'cha': 'CHA:',
        'str_abbrev': 'STR',
        'dex_abbrev': 'DEX',
        'con_abbrev': 'CON',
        'int_abbrev': 'INT',
        'wis_abbrev': 'WIS',
        'cha_abbrev': 'CHA',
        'attack-builder': 'Attack Builder',
        'attack-name': 'Attack Name:',
        'attack-type': 'Type:',
        'attack-melee': 'Melee Weapon Attack',
        'attack-ranged': 'Ranged Weapon Attack',
        'attack-spell': 'Spell Attack',
        'attack-bonus': 'Attack Bonus:',
        'attack-reach': 'Reach/Range:',
        'attack-damage-dice': 'Damage Dice:',
        'attack-damage-bonus': 'Damage Bonus:',
        'attack-damage-type': 'Damage Type:',
        'attack-extra': 'Extra Effects:',
        'add-attack': 'Add Attack',
        'confirm-attack': 'Confirm Attack',
        'cancel-attack': 'Cancel'
    },
    pt: {
        'app-title': 'D&D Monster Card Maker',
        'app-subtitle': 'Crie cartas estilo MTG para seus monstros de D&D',
        'monster-info': 'Informações do Monstro',
        'monster-name': 'Nome do Monstro:',
        'monster-name-placeholder': 'Digite o nome do monstro',
        'monster-type': 'Tipo e Tamanho:',
        'monster-type-placeholder': 'ex: Dragão Grande, caótico maligno',
        'type-aberration': '🧠 Aberração',
        'type-beast': '🐾 Fera',
        'type-celestial': '☀ Celestial',
        'type-construct': '⚙ Constructo',
        'type-dragon': '🐲 Dragão',
        'type-elemental': '🔥 Elemental',
        'type-fey': '🧚 Feérico',
        'type-fiend': '👹 Corruptor',
        'type-giant': '⛰ Gigante',
        'type-humanoid': '👤 Humanoide',
        'type-monstrosity': '🐙 Monstruosidade',
        'type-ooze': '🟫 Gosma',
        'type-plant': '🌱 Planta',
        'type-undead': '☠ Morto-vivo',
        'type-custom': '📝 Personalizado',
        'armor-class': 'Classe de Armadura:',
        'armor-class-placeholder': 'ex: 18 (Armadura Natural)',
        'hit-points': 'Pontos de Vida:',
        'hit-points-placeholder': 'ex: 256 (19d20 + 57)',
        'speed': 'Velocidade:',
        'speed-placeholder': 'ex: 12m, voo 24m, natação 12m',
        'challenge-rating': 'Nível de Desafio:',
        'challenge-rating-placeholder': 'ex: 17 (18.000 XP)',
        'monster-image': 'URL da Imagem:',
        'monster-image-placeholder': 'https://exemplo.com/monstro.jpg',
        'monster-image-upload': 'Ou Enviar Imagem:',
        'monster-upload-placeholder': 'Escolher arquivo de imagem...',
        'card-customization': 'Personalização da Carta',
        'card-color': 'Tema de Cor da Carta:',
        'color-classic': 'Marrom Clássico',
        'color-red': 'Vermelho (Fogo/Dragões)',
        'color-blue': 'Azul (Água/Gelo)',
        'color-green': 'Verde (Natureza/Bestas)',
        'color-black': 'Preto (Mortos-vivos/Demônios)',
        'color-white': 'Branco (Celestiais/Luz)',
        'color-purple': 'Roxo (Aberrações/Psíquico)',
        'color-metal': 'Metal (Constructos/Máquinas)',
        'color-gold': 'Dourado (Lendário)',
        'card-logo': 'Logo do Tipo de Carta:',
        'logo-none': 'Sem Logo',
        'logo-fire': 'Fogo',
        'logo-water': 'Água',
        'logo-nature': 'Natureza',
        'logo-lightning': 'Relâmpago',
        'logo-hammer': 'Martelo/Forja',
        'logo-combat': 'Combate',
        'logo-defense': 'Defesa',
        'logo-death': 'Morte/Mortos-vivos',
        'logo-magic': 'Magia',
        'logo-royal': 'Real/Nobre',
        'logo-dragon': 'Dragão',
        'logo-night': 'Noite/Sombra',
        'logo-light': 'Luz/Sagrado',
        'logo-mind': 'Mente/Psíquico',
        'logo-mechanical': 'Mecânico',
        'image-position': 'Posição da Imagem:',
        'horizontal': 'Horizontal:',
        'vertical': 'Vertical:',
        'scale': 'Escala:',
        'reset-position': 'Resetar Posição',
        'special-abilities': 'Habilidades Especiais:',
        'actions': 'Ações:',
        'formatting-help': 'Use **negrito**, *itálico*, ou ***negrito itálico*** para formatação',
        'special-abilities-placeholder': 'Digite as habilidades especiais, uma por linha. Use formatação **negrito** e *itálico*.',
        'actions-placeholder': 'Digite as ações, uma por linha. Use formatação **negrito** e *itálico*.',
        'generate-card': 'Gerar Carta',
        'card-preview': 'Visualização da Carta',
        'download-card': 'Baixar Carta',
        'card-back-options': 'Opções do Verso',
        'card-back-type': 'Tipo do Verso:',
        'back-logo': 'Apenas Logo (mesma cor)',
        'back-image': 'Imagem Personalizada',
        'back-empty': 'Vazio/Transparente',
        'back-text-overflow': 'Texto Excedente (para descrições longas)',
        'back-image-url': 'URL da Imagem do Verso:',
        'back-image-placeholder': 'https://exemplo.com/imagem-verso.jpg',
        'back-image-upload': 'Ou Enviar Imagem:',
        'back-upload-placeholder': 'Escolher arquivo de imagem...',
        'str': 'FOR:',
        'dex': 'DES:',
        'con': 'CON:',
        'int': 'INT:',
        'wis': 'SAB:',
        'cha': 'CAR:',
        'str_abbrev': 'FOR',
        'dex_abbrev': 'DES',
        'con_abbrev': 'CON',
        'int_abbrev': 'INT',
        'wis_abbrev': 'SAB',
        'cha_abbrev': 'CAR',
        'attack-builder': 'Construtor de Ataques',
        'attack-name': 'Nome do Ataque:',
        'attack-type': 'Tipo:',
        'attack-melee': 'Ataque Corpo a Corpo',
        'attack-ranged': 'Ataque à Distância',
        'attack-spell': 'Ataque de Magia',
        'attack-bonus': 'Bônus de Ataque:',
        'attack-reach': 'Alcance:',
        'attack-damage-dice': 'Dados de Dano:',
        'attack-damage-bonus': 'Bônus de Dano:',
        'attack-damage-type': 'Tipo de Dano:',
        'attack-extra': 'Efeitos Extras:',
        'add-attack': 'Adicionar Ataque',
        'confirm-attack': 'Confirmar Ataque',
        'cancel-attack': 'Cancelar'
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Translation function
function translate(language) {
    const lang = translations[language] || translations.en;
    
    // Translate text content
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (lang[key]) {
            element.placeholder = lang[key];
        }
    });
    
    // Save language preference
    localStorage.setItem('language', language);
    currentLanguage = language;
}

// Form inputs
const nameInput = document.getElementById('monster-name');
const typeInput = document.getElementById('monster-type');
const typeCustomInput = document.getElementById('monster-type-custom');
const acInput = document.getElementById('armor-class');
const hpInput = document.getElementById('hit-points');
const speedInput = document.getElementById('speed');
const crInput = document.getElementById('challenge-rating');
const imageInput = document.getElementById('monster-image');
const imageUpload = document.getElementById('monster-image-upload');
const abilitiesInput = document.getElementById('special-abilities');
const actionsInput = document.getElementById('actions');

// Attack builder inputs
const attackForm = document.getElementById('attack-form');
const addAttackBtn = document.getElementById('add-attack-btn');
const confirmAttackBtn = document.getElementById('confirm-attack');
const cancelAttackBtn = document.getElementById('cancel-attack');
const attackNameInput = document.getElementById('attack-name');
const attackTypeSelect = document.getElementById('attack-type');
const attackBonusInput = document.getElementById('attack-bonus');
const attackReachInput = document.getElementById('attack-reach');
const attackDamageDiceInput = document.getElementById('attack-damage-dice');
const attackDamageBonusInput = document.getElementById('attack-damage-bonus');
const attackDamageTypeSelect = document.getElementById('attack-damage-type');
const attackExtraInput = document.getElementById('attack-extra');

// Customization inputs
const cardColorSelect = document.getElementById('card-color');
const cardLogoSelect = document.getElementById('card-logo');
const imageXSlider = document.getElementById('image-x');
const imageYSlider = document.getElementById('image-y');
const imageScaleSlider = document.getElementById('image-scale');
const imageXValue = document.getElementById('image-x-value');
const imageYValue = document.getElementById('image-y-value');
const imageScaleValue = document.getElementById('image-scale-value');
const resetImageBtn = document.getElementById('reset-image-position');

// Ability score inputs
const strInput = document.getElementById('strength');
const dexInput = document.getElementById('dexterity');
const conInput = document.getElementById('constitution');
const intInput = document.getElementById('intelligence');
const wisInput = document.getElementById('wisdom');
const chaInput = document.getElementById('charisma');

// AC Calculator elements
const acBaseInput = document.getElementById('ac-base');

// Track whether AC was manually entered by user
let acManuallyEntered = false;

// Card elements
const monsterCard = document.getElementById('monster-card');
const cardName = document.querySelector('.card-name');
const cardLogo = document.getElementById('card-logo-display');
const cardCost = document.querySelector('.card-cost');
const cardImage = document.getElementById('card-image');
const cardImageContainer = document.querySelector('.monster-image-container');
const cardType = document.getElementById('card-type-text');
const cardAc = document.getElementById('card-ac');
const cardHp = document.getElementById('card-hp');
const cardSpeed = document.getElementById('card-speed');
const cardStr = document.getElementById('card-str');
const cardDex = document.getElementById('card-dex');
const cardCon = document.getElementById('card-con');
const cardInt = document.getElementById('card-int');
const cardWis = document.getElementById('card-wis');
const cardCha = document.getElementById('card-cha');
const cardAbilities = document.getElementById('card-special-abilities');
const cardActions = document.getElementById('card-actions-list');

// Modifier and save elements
const cardStrMod = document.getElementById('card-str-mod');
const cardStrSave = document.getElementById('card-str-save');
const cardDexMod = document.getElementById('card-dex-mod');
const cardDexSave = document.getElementById('card-dex-save');
const cardConMod = document.getElementById('card-con-mod');
const cardConSave = document.getElementById('card-con-save');
const cardIntMod = document.getElementById('card-int-mod');
const cardIntSave = document.getElementById('card-int-save');
const cardWisMod = document.getElementById('card-wis-mod');
const cardWisSave = document.getElementById('card-wis-save');
const cardChaMod = document.getElementById('card-cha-mod');
const cardChaSave = document.getElementById('card-cha-save');

// Card back elements
const cardBackTypeSelect = document.getElementById('card-back-type');
const backImageGroup = document.getElementById('back-image-group');
const backImageInput = document.getElementById('back-image-url');
const backImageUpload = document.getElementById('back-image-upload');
const cardBack = document.getElementById('monster-card-back');
const cardBackContent = document.querySelector('.card-back-content');
const cardBackLogo = document.getElementById('card-back-logo');
const cardBackImageContainer = document.getElementById('card-back-image-container');
const cardBackImage = document.getElementById('card-back-image');
const cardBackText = document.getElementById('card-back-text');

// Utility function to calculate ability modifier
function getAbilityModifier(score) {
    return Math.floor((score - 10) / 2);
}

// Format ability score with modifier
function formatAbilityScore(score) {
    return score;
}

// Format modifier with + or -
function formatModifier(modifier) {
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
}

// Calculate AC automatically (only if not manually entered)
function calculateAC() {
    // Don't override manually entered AC values
    if (acManuallyEntered) {
        return;
    }
    
    const dex = parseInt(dexInput.value) || 10;
    const dexMod = getAbilityModifier(dex);
    const baseAC = parseInt(acBaseInput?.value) || 10;
    const calculatedAC = baseAC + dexMod;
    
    // Update AC field with calculated value
    acInput.value = calculatedAC.toString();
    updateCard();
}

// Auto-calculate AC when dexterity changes
function setupACCalculator() {
    // Track manual AC input
    if (acInput) {
        acInput.addEventListener('input', () => {
            // Mark AC as manually entered when user types in the field
            acManuallyEntered = acInput.value.trim() !== '';
        });
        
        // Reset manual flag when AC field is cleared
        acInput.addEventListener('change', () => {
            if (acInput.value.trim() === '') {
                acManuallyEntered = false;
                // Auto-calculate if DEX is available
                if (dexInput.value) {
                    calculateAC();
                }
            }
        });
    }
    
    if (dexInput) {
        dexInput.addEventListener('input', () => {
            // Auto-calculate AC when DEX is entered, but only if AC is empty or not manually entered
            if (dexInput.value && !acManuallyEntered) {
                calculateAC();
            }
        });
    }
    
    if (acBaseInput) {
        acBaseInput.addEventListener('input', () => {
            if (!acManuallyEntered) {
                calculateAC();
            }
        });
    }
}

// Format text with markdown-style formatting
function formatText(text) {
    if (!text) return '';
    
    // Handle bold italic first (***text*** or ***text.***) 
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    
    // Handle bold (**text** or **text.**)
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Handle italic (*text* or *text.*)
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    return text;
}

// Update card color theme
function updateCardColor() {
    const selectedColor = cardColorSelect.value;
    
    console.log('updateCardColor called with:', selectedColor);
    
    if (!monsterCard) {
        console.error('monsterCard element not found!');
        return;
    }
    
    // Remove all color classes
    monsterCard.classList.remove('classic', 'red', 'blue', 'green', 'black', 'white', 'purple', 'metal', 'gold');
    
    // Add selected color class only if it's not empty and not 'classic'
    if (selectedColor && selectedColor !== 'classic' && selectedColor.trim() !== '') {
        monsterCard.classList.add(selectedColor);
        console.log('Added color class:', selectedColor);
    } else {
        console.log('No color class added (classic or empty)');
    }
}

// Update card logo
function updateCardLogo() {
    const selectedLogo = cardLogoSelect.value;
    
    console.log('updateCardLogo called with:', selectedLogo);
    
    if (!cardLogo) {
        console.error('cardLogo element not found!');
        return;
    }
    
    if (selectedLogo) {
        cardLogo.textContent = selectedLogo;
        console.log('Logo updated to:', selectedLogo);
    } else {
        console.log('No logo set (empty value)');
    }
}

// Reset image position to center
function resetImagePosition() {
    imageXSlider.value = 0;
    imageYSlider.value = 0;
    imageScaleSlider.value = 100;
    updateImagePosition();
}

// Update image position and scale
function updateImagePosition() {
    const x = imageXSlider.value;
    const y = imageYSlider.value;
    const scale = imageScaleSlider.value;
    
    // Update display values
    imageXValue.textContent = x;
    imageYValue.textContent = y;
    imageScaleValue.textContent = scale + '%';
    
    // Apply transforms to image
    if (cardImage.classList.contains('loaded')) {
        // Combine the centering transform with user adjustments
        const translateX = -50 + parseFloat(x);
        const translateY = -50 + parseFloat(y);
        const scaleValue = scale / 100;
        
        cardImage.style.transform = `translate(${translateX}%, ${translateY}%) scale(${scaleValue})`;
    }
}

// Generate card function
function generateCard() {
    console.log('generateCard() called');
    console.log('Current input values:', {
        name: nameInput.value,
        cr: crInput.value,
        ac: acInput.value
    });
    
    // Check if card elements exist
    console.log('Card elements:', {
        cardName: cardName,
        cardCost: cardCost,
        cardType: cardType,
        cardAc: cardAc
    });
    
    // Update card color theme and logo
    updateCardColor();
    updateCardLogo();
    
    // Update card name and cost
    if (cardName) {
        cardName.textContent = nameInput.value || 'Monster Name';
        console.log('Card name updated to:', cardName.textContent);
    } else {
        console.error('cardName element not found!');
    }
    
    if (cardCost) {
        cardCost.textContent = crInput.value || 'CR';
        console.log('Card CR updated to:', cardCost.textContent);
    } else {
        console.error('cardCost element not found!');
    }

    // Update card type with symbol
    let displayType = 'Creature Type';
    if (typeInput.value === 'custom') {
        displayType = typeCustomInput.value || 'Custom Creature Type';
    } else if (typeInput.value) {
        // Get the text content from the selected option (includes symbol)
        const selectedOption = typeInput.options[typeInput.selectedIndex];
        displayType = selectedOption ? selectedOption.textContent : typeInput.value;
    }
    cardType.textContent = displayType;

    // Update AC and HP
    cardAc.textContent = acInput.value || '--';
    cardHp.textContent = hpInput.value || '--';

    // Update speed
    cardSpeed.textContent = speedInput.value || '--';

    // Update ability scores
    const str = parseInt(strInput.value) || 10;
    const dex = parseInt(dexInput.value) || 10;
    const con = parseInt(conInput.value) || 10;
    const int = parseInt(intInput.value) || 10;
    const wis = parseInt(wisInput.value) || 10;
    const cha = parseInt(chaInput.value) || 10;

    // Calculate modifiers
    const strMod = getAbilityModifier(str);
    const dexMod = getAbilityModifier(dex);
    const conMod = getAbilityModifier(con);
    const intMod = getAbilityModifier(int);
    const wisMod = getAbilityModifier(wis);
    const chaMod = getAbilityModifier(cha);

    // Update ability scores (just the number)
    cardStr.textContent = str;
    cardDex.textContent = dex;
    cardCon.textContent = con;
    cardInt.textContent = int;
    cardWis.textContent = wis;
    cardCha.textContent = cha;

    // Update modifiers
    cardStrMod.textContent = formatModifier(strMod);
    cardDexMod.textContent = formatModifier(dexMod);
    cardConMod.textContent = formatModifier(conMod);
    cardIntMod.textContent = formatModifier(intMod);
    cardWisMod.textContent = formatModifier(wisMod);
    cardChaMod.textContent = formatModifier(chaMod);

    // Update saving throws (modifier + proficiency bonus, assuming +2 for simplicity)
    const proficiencyBonus = 2;
    cardStrSave.textContent = formatModifier(strMod + proficiencyBonus);
    cardDexSave.textContent = formatModifier(dexMod + proficiencyBonus);
    cardConSave.textContent = formatModifier(conMod + proficiencyBonus);
    cardIntSave.textContent = formatModifier(intMod + proficiencyBonus);
    cardWisSave.textContent = formatModifier(wisMod + proficiencyBonus);
    cardChaSave.textContent = formatModifier(chaMod + proficiencyBonus);

    // Update image
    if (imageInput.value) {
        cardImage.src = imageInput.value;
        cardImage.classList.add('loaded');
        cardImage.onload = function() {
            updateImagePosition();
        };
        cardImage.onerror = function() {
            this.classList.remove('loaded');
            this.src = '';
        };
    } else {
        cardImage.classList.remove('loaded');
        cardImage.src = '';
    }

    // Check for content overflow first
    let hasOverflow = false;
    try {
        hasOverflow = detectContentOverflow();
    } catch (error) {
        console.warn('Error detecting content overflow:', error);
        hasOverflow = false;
    }

    if (hasOverflow) {
        // Use overflow system - getOverflowContent will handle updating front card content
        console.log('Content overflow detected, using overflow system');
        getOverflowContent(); // This calls updateFrontCardContent internally
    } else {
        // No overflow, use normal content display
        console.log('No overflow, using normal content display');
        
        // Update special abilities
        cardAbilities.innerHTML = '';
        if (abilitiesInput.value.trim()) {
            const abilitiesTitle = document.createElement('h4');
            abilitiesTitle.textContent = 'Special Abilities';
            cardAbilities.appendChild(abilitiesTitle);

            const abilities = abilitiesInput.value.split('\n').filter(line => line.trim());
            abilities.forEach(ability => {
                const abilityDiv = document.createElement('div');
                abilityDiv.className = 'ability-item';
                
                // Check if ability has a name (format: "Name. Description")
                const colonIndex = ability.indexOf('.');
                if (colonIndex > 0 && colonIndex < 30) {
                    const name = ability.substring(0, colonIndex);
                    const description = ability.substring(colonIndex + 1).trim();
                    abilityDiv.innerHTML = `<span class="ability-name">${formatText(name)}.</span> ${formatText(description)}`;
                } else {
                    abilityDiv.innerHTML = formatText(ability);
                }
                
                cardAbilities.appendChild(abilityDiv);
            });
        }

        // Update actions
        cardActions.innerHTML = '';
        if (actionsInput.value.trim()) {
            const actionsTitle = document.createElement('h4');
            actionsTitle.textContent = 'Actions';
            cardActions.appendChild(actionsTitle);

            const actions = actionsInput.value.split('\n').filter(line => line.trim());
            actions.forEach(action => {
                const actionDiv = document.createElement('div');
                actionDiv.className = 'action-item';
                
                // Check if action has a name (format: "Name. Description")
                const colonIndex = action.indexOf('.');
                if (colonIndex > 0 && colonIndex < 30) {
                    const name = action.substring(0, colonIndex);
                    const description = action.substring(colonIndex + 1).trim();
                    actionDiv.innerHTML = `<span class="action-name">${formatText(name)}.</span> ${formatText(description)}`;
                } else {
                    actionDiv.innerHTML = formatText(action);
                }
                
                cardActions.appendChild(actionDiv);
            });
        }
    }
    
    // Update card back
    updateCardBack();
}

// Function to detect if front card content is overflowing
function detectContentOverflow() {
    const card = document.getElementById('monster-card');
    if (!card) return false;
    
    // Count total estimated lines of text content
    let totalLines = 0;
    const maxLinesOnFront = 18; // More conservative limit
    
    // Count abilities lines
    if (abilitiesInput.value.trim()) {
        const abilities = abilitiesInput.value.split('\n').filter(line => line.trim());
        abilities.forEach(ability => {
            totalLines += Math.ceil(ability.length / 50); // More conservative ~50 chars per line
        });
    }
    
    // Count actions lines
    if (actionsInput.value.trim()) {
        const actions = actionsInput.value.split('\n').filter(line => line.trim());
        actions.forEach(action => {
            totalLines += Math.ceil(action.length / 50); // More conservative ~50 chars per line
        });
    }
    
    console.log(`Total estimated lines: ${totalLines}, Max allowed: ${maxLinesOnFront}`);
    return totalLines > maxLinesOnFront;
}

// Function to distribute content across multiple cards
function distributeContentAcrossCards() {
    const maxLinesPerCard = 18;
    let cards = [];
    let currentCard = { abilities: [], actions: [], lines: 0 };
    
    // Collect all content
    let allContent = [];
    
    // Add abilities
    if (abilitiesInput.value.trim()) {
        const abilities = abilitiesInput.value.split('\n').filter(line => line.trim());
        abilities.forEach(ability => {
            allContent.push({
                type: 'ability',
                text: ability,
                lines: Math.ceil(ability.length / 50)
            });
        });
    }
    
    // Add actions
    if (actionsInput.value.trim()) {
        const actions = actionsInput.value.split('\n').filter(line => line.trim());
        actions.forEach(action => {
            allContent.push({
                type: 'action',
                text: action,
                lines: Math.ceil(action.length / 50)
            });
        });
    }
    
    // Distribute content across cards
    allContent.forEach(item => {
        // If adding this item would exceed the limit, start a new card
        if (currentCard.lines + item.lines > maxLinesPerCard && currentCard.lines > 0) {
            cards.push(currentCard);
            currentCard = { abilities: [], actions: [], lines: 0 };
        }
        
        // Add item to current card
        if (item.type === 'ability') {
            currentCard.abilities.push(item.text);
        } else {
            currentCard.actions.push(item.text);
        }
        currentCard.lines += item.lines;
    });
    
    // Add the last card if it has content
    if (currentCard.lines > 0) {
        cards.push(currentCard);
    }
    
    return cards;
}

// Function to get overflow text content
function getOverflowContent() {
    let overflowContent = '';
    let totalLines = 0;
    const maxLinesOnFront = 18; // More conservative limit
    
    // Collect all text content in order
    let allContent = [];
    
    // Add abilities to content array
    if (abilitiesInput.value.trim()) {
        const abilities = abilitiesInput.value.split('\n').filter(line => line.trim());
        abilities.forEach(ability => {
            allContent.push({
                type: 'ability',
                text: ability,
                lines: Math.ceil(ability.length / 50) // More conservative ~50 chars per line
            });
        });
    }
    
    // Add actions to content array
    if (actionsInput.value.trim()) {
        const actions = actionsInput.value.split('\n').filter(line => line.trim());
        actions.forEach(action => {
            allContent.push({
                type: 'action',
                text: action,
                lines: Math.ceil(action.length / 50) // More conservative ~50 chars per line
            });
        });
    }
    
    // Separate content into front and back based on line count
    let frontContent = { abilities: [], actions: [] };
    let backContent = { abilities: [], actions: [] };
    
    allContent.forEach(item => {
        if (totalLines + item.lines <= maxLinesOnFront) {
            // Add to front
            if (item.type === 'ability') {
                frontContent.abilities.push(item.text);
            } else {
                frontContent.actions.push(item.text);
            }
            totalLines += item.lines;
        } else {
            // Add to back
            if (item.type === 'ability') {
                backContent.abilities.push(item.text);
            } else {
                backContent.actions.push(item.text);
            }
        }
    });
    
    // Update front card with limited content
    updateFrontCardContent(frontContent, backContent.abilities.length > 0 || backContent.actions.length > 0);
    
    // Prepare back card content
    if (backContent.abilities.length > 0) {
        overflowContent += '<h4>Special Abilities (continued)</h4>';
        backContent.abilities.forEach(ability => {
            const colonIndex = ability.indexOf('.');
            if (colonIndex > 0 && colonIndex < 30) {
                const name = ability.substring(0, colonIndex);
                const description = ability.substring(colonIndex + 1).trim();
                overflowContent += `<p><strong>${formatText(name)}.</strong> ${formatText(description)}</p>`;
            } else {
                overflowContent += `<p>${formatText(ability)}</p>`;
            }
        });
    }
    
    if (backContent.actions.length > 0) {
        if (overflowContent) overflowContent += '<br>';
        overflowContent += '<h4>Actions (continued)</h4>';
        backContent.actions.forEach(action => {
            const colonIndex = action.indexOf('.');
            if (colonIndex > 0 && colonIndex < 30) {
                const name = action.substring(0, colonIndex);
                const description = action.substring(colonIndex + 1).trim();
                overflowContent += `<p><strong>${formatText(name)}.</strong> ${formatText(description)}</p>`;
            } else {
                overflowContent += `<p>${formatText(action)}</p>`;
            }
        });
    }
    
    return overflowContent;
}

// Helper function to update front card content
function updateFrontCardContent(frontContent, hasOverflow) {
    // Always clear both sections first
    cardAbilities.innerHTML = '';
    cardActions.innerHTML = '';
    
    // Update abilities
    if (frontContent.abilities.length > 0) {
        const abilitiesTitle = document.createElement('h4');
        abilitiesTitle.textContent = 'Special Abilities';
        cardAbilities.appendChild(abilitiesTitle);
        
        frontContent.abilities.forEach(ability => {
            const abilityDiv = document.createElement('div');
            abilityDiv.className = 'ability-item';
            
            const colonIndex = ability.indexOf('.');
            if (colonIndex > 0 && colonIndex < 30) {
                const name = ability.substring(0, colonIndex);
                const description = ability.substring(colonIndex + 1).trim();
                abilityDiv.innerHTML = `<span class="ability-name">${formatText(name)}.</span> ${formatText(description)}`;
            } else {
                abilityDiv.innerHTML = formatText(ability);
            }
            
            cardAbilities.appendChild(abilityDiv);
        });
        
        // Add continuation indicator if there's overflow
        if (hasOverflow) {
            const continueDiv = document.createElement('div');
            continueDiv.className = 'continue-indicator';
            continueDiv.innerHTML = '<em>(continued on back...)</em>';
            cardAbilities.appendChild(continueDiv);
        }
    }
    
    // Update actions
    if (frontContent.actions.length > 0) {
        const actionsTitle = document.createElement('h4');
        actionsTitle.textContent = 'Actions';
        cardActions.appendChild(actionsTitle);
        
        frontContent.actions.forEach(action => {
            const actionDiv = document.createElement('div');
            actionDiv.className = 'action-item';
            
            const colonIndex = action.indexOf('.');
            if (colonIndex > 0 && colonIndex < 30) {
                const name = action.substring(0, colonIndex);
                const description = action.substring(colonIndex + 1).trim();
                actionDiv.innerHTML = `<span class="action-name">${formatText(name)}.</span> ${formatText(description)}`;
            } else {
                actionDiv.innerHTML = formatText(action);
            }
            
            cardActions.appendChild(actionDiv);
        });
    }
}

// Update card back function
function updateCardBack() {
    const backType = cardBackTypeSelect.value;
    const currentColor = monsterCard.className.match(/\b(red|blue|green|black|white|purple|metal|gold|classic)\b/)?.[0] || 'classic';
    
    // Apply same color scheme to back
    cardBack.className = `monster-card card-back ${currentColor}`;
    
    // Hide all back content first
    cardBackLogo.style.display = 'none';
    cardBackImageContainer.style.display = 'none';
    cardBackText.style.display = 'none';
    
    // Check for content overflow
    let hasOverflow = false;
    let overflowContent = '';
    try {
        hasOverflow = detectContentOverflow();
        overflowContent = getOverflowContent();
    } catch (error) {
        console.warn('Error detecting content overflow:', error);
        hasOverflow = false;
        overflowContent = '';
    }
    
    // Auto-switch to text overflow mode if content is overflowing
    if (hasOverflow && overflowContent.trim()) {
        // Content overflow always takes priority over manual back settings
        console.log('Showing overflow content on back, with background image if available');
        
        // Add overflow mode class to position content at top
        cardBackContent.classList.add('overflow-mode');
        
        // Show text
        cardBackText.style.display = 'block';
        cardBackText.innerHTML = overflowContent;
        
        // Check if there's a background image to show behind the text
        if (backType === 'image' && backImageInput.value) {
            // Show image behind the text
            cardBackImageContainer.style.display = 'flex';
            cardBackImage.src = backImageInput.value;
            // Make the image more transparent so text is readable
            cardBackImage.style.opacity = '0.4';
            cardBackImage.style.filter = 'blur(0.5px)'; // Very slight blur for better text readability
            
            // Hide logo when there's a background image
            cardBackLogo.style.display = 'none';
        } else {
            // Show faded logo background if no image
            cardBackLogo.style.display = 'block';
            cardBackLogo.textContent = cardLogoSelect.value || '⚔️';
            cardBackLogo.style.opacity = '0.05';
            
            // Hide image container
            cardBackImageContainer.style.display = 'none';
        }
    } else {
        // Remove overflow mode class for normal back modes
        cardBackContent.classList.remove('overflow-mode');
        // Normal back behavior
        switch (backType) {
            case 'logo':
                cardBackLogo.style.display = 'block';
                cardBackLogo.style.opacity = '0.15';
                cardBackLogo.textContent = cardLogoSelect.value || '⚔️';
                break;
                
            case 'image':
                if (backImageInput.value) {
                    cardBackImageContainer.style.display = 'flex';
                    cardBackImage.src = backImageInput.value;
                    // Reset image styles for normal display (no overflow)
                    cardBackImage.style.opacity = '1';
                    cardBackImage.style.filter = 'none';
                } else {
                    // Fallback to logo if no image
                    cardBackLogo.style.display = 'block';
                    cardBackLogo.style.opacity = '0.15';
                    cardBackLogo.textContent = cardLogoSelect.value || '⚔️';
                }
                break;
                
            case 'text-overflow':
                cardBackText.style.display = 'block';
                // Show logo faintly in background
                cardBackLogo.style.display = 'block';
                cardBackLogo.style.opacity = '0.08';
                cardBackLogo.textContent = cardLogoSelect.value || '⚔️';
                
                // Compile all text content for overflow
                let textContent = '<h4>Complete Monster Details</h4>';
                textContent += `<p><strong>Name:</strong> ${nameInput.value || 'Monster Name'}</p>`;
                textContent += `<p><strong>Type:</strong> ${typeInput.value || 'Creature Type'}</p>`;
                textContent += `<p><strong>Armor Class:</strong> ${acInput.value || '--'}</p>`;
                textContent += `<p><strong>Hit Points:</strong> ${hpInput.value || '--'}</p>`;
                textContent += `<p><strong>Speed:</strong> ${speedInput.value || '--'}</p>`;
                textContent += `<p><strong>Challenge Rating:</strong> ${crInput.value || '--'}</p>`;
                
                if (abilitiesInput.value.trim()) {
                    textContent += '<h4>Special Abilities</h4>';
                    textContent += `<p>${formatText(abilitiesInput.value)}</p>`;
                }
                
                if (actionsInput.value.trim()) {
                    textContent += '<h4>Actions</h4>';
                    textContent += `<p>${formatText(actionsInput.value)}</p>`;
                }
                
                cardBackText.innerHTML = textContent;
                break;
                
            case 'empty':
                // Keep it empty but show faded logo if no overflow
                cardBackLogo.style.display = 'block';
                cardBackLogo.style.opacity = '0.05';
                cardBackLogo.textContent = cardLogoSelect.value || '⚔️';
                break;
        }
    }
}

// Attack Builder Functions
function showAttackForm() {
    attackForm.style.display = 'block';
    addAttackBtn.textContent = translations[currentLanguage]['add-attack'] || 'Add Attack';
}

function hideAttackForm() {
    attackForm.style.display = 'none';
}

function generateAttackText() {
    const name = attackNameInput.value.trim();
    const type = attackTypeSelect.value;
    const bonus = attackBonusInput.value;
    const reach = attackReachInput.value.trim();
    const damageDice = attackDamageDiceInput.value.trim();
    const damageBonus = attackDamageBonusInput.value;
    const damageType = attackDamageTypeSelect.value;
    const extra = attackExtraInput.value.trim();
    
    if (!name) {
        alert('Please enter an attack name.');
        return null;
    }
    
    let attackText = `**${name}.** `;
    
    // Attack type
    let attackTypeText = '';
    switch (type) {
        case 'melee':
            attackTypeText = '*Melee Weapon Attack:*';
            break;
        case 'ranged':
            attackTypeText = '*Ranged Weapon Attack:*';
            break;
        case 'spell':
            attackTypeText = '*Ranged Spell Attack:*';
            break;
    }
    
    attackText += attackTypeText;
    
    // Attack bonus
    if (bonus) {
        const bonusText = bonus.toString().startsWith('+') || bonus.toString().startsWith('-') ? bonus : `+${bonus}`;
        attackText += ` ${bonusText} to hit`;
    }
    
    // Reach/Range
    if (reach) {
        attackText += `, reach ${reach}`;
    }
    
    attackText += ', one target. ';
    
    // Damage
    if (damageDice || damageBonus) {
        let damage = '';
        let averageDamage = '';
        
        if (damageDice) {
            // Calculate average damage for dice
            const diceMatch = damageDice.match(/(\d+)d(\d+)/);
            if (diceMatch) {
                const numDice = parseInt(diceMatch[1]);
                const diceSize = parseInt(diceMatch[2]);
                const avgRoll = (diceSize + 1) / 2;
                averageDamage = Math.floor(numDice * avgRoll);
            }
            damage = damageDice;
        }
        
        if (damageBonus) {
            const bonus = parseInt(damageBonus);
            if (damage) {
                damage += ` + ${Math.abs(bonus)}`;
                averageDamage = averageDamage ? averageDamage + bonus : bonus;
            } else {
                damage = Math.abs(bonus).toString();
                averageDamage = Math.abs(bonus);
            }
        }
        
        if (damage) {
            attackText += `*Hit:* `;
            if (averageDamage) {
                attackText += `${averageDamage} (${damage}) `;
            } else {
                attackText += `${damage} `;
            }
            attackText += `***${damageType}*** damage`;
        }
    }
    
    // Extra effects
    if (extra) {
        if (damageDice || damageBonus) {
            attackText += `, and ${extra}`;
        } else {
            attackText += `*Hit:* ${extra}`;
        }
    }
    
    attackText += '.';
    
    return attackText;
}

function confirmAttack() {
    const attackText = generateAttackText();
    if (!attackText) return;
    
    // Add to actions textarea
    const currentActions = actionsInput.value.trim();
    if (currentActions) {
        actionsInput.value = currentActions + '\n' + attackText;
    } else {
        actionsInput.value = attackText;
    }
    
    // Clear the attack form and hide it
    clearAttackForm();
    hideAttackForm();
    
    // Update the card
    generateCard();
}

function cancelAttack() {
    clearAttackForm();
    hideAttackForm();
}

function clearAttackForm() {
    attackNameInput.value = '';
    attackBonusInput.value = '';
    attackReachInput.value = '';
    attackDamageDiceInput.value = '';
    attackDamageBonusInput.value = '';
    attackExtraInput.value = '';
    attackTypeSelect.value = 'melee';
    attackDamageTypeSelect.value = 'slashing';
}

// Download card as image
async function downloadCard() {
    try {
        console.log('Starting download process...');
        
        // First, ensure the card is generated with latest data
        generateCard();
        
        // Wait a moment for the card to update
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Check if html2canvas is already loaded
        if (typeof html2canvas !== 'undefined') {
            console.log('html2canvas already loaded, proceeding...');
            await processCardDownload();
            return;
        }
        
        console.log('Loading html2canvas library...');
        
        // Import html2canvas dynamically
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        document.head.appendChild(script);
        
        script.onload = async function() {
            console.log('html2canvas loaded successfully');
            await processCardDownload();
        };
        
        script.onerror = function() {
            console.error('Failed to load html2canvas library');
            alert('Error loading image generation library. Please check your internet connection.');
        };
    } catch (error) {
        console.error('Error in download setup:', error.message || error);
        console.error('Stack trace:', error.stack);
        alert('Error downloading card: ' + (error.message || 'Unknown error'));
    }
}

async function processCardDownload() {
    try {
        console.log('Starting card processing...');
        
        // Check if we need multiple cards
        const hasOverflow = detectContentOverflow();
        
        if (hasOverflow) {
            console.log('Content overflow detected, generating multiple cards...');
            await processMultipleCardsDownload();
        } else {
            console.log('Normal content, generating standard card pair...');
            await processSingleCardDownload();
        }
        
    } catch (error) {
        console.error('Error in card processing:', error.message || error);
        console.error('Stack trace:', error.stack);
        alert('Error processing card: ' + (error.message || 'Unknown error'));
    }
}

async function processSingleCardDownload() {
    // Get the card elements
    const frontCard = document.getElementById('monster-card');
    const backCard = document.getElementById('monster-card-back');
    
    if (!frontCard || !backCard) {
        console.error('Card elements not found');
        throw new Error('Card elements not found');
    }
    
    console.log('Card elements found, creating download container...');
    
    // Create a container for both cards side by side
    const downloadContainer = document.createElement('div');
    downloadContainer.style.cssText = `
        display: flex;
        gap: 20px;
        background: white;
        padding: 20px;
        position: fixed;
        left: -9999px;
        top: -9999px;
        z-index: -1000;
    `;
    
    // Clone front card and reset transforms
    const frontClone = frontCard.cloneNode(true);
    frontClone.style.cssText = `
        margin: 0;
        transform: none;
        position: relative;
        width: 450px;
        height: 900px;
    `;
    
    // Clone back card and reset transforms
    const backClone = backCard.cloneNode(true);
    backClone.style.cssText = `
        margin: 0;
        transform: none;
        position: relative;
        width: 450px;
        height: 900px;
    `;
    
    // Add both cards to container
    downloadContainer.appendChild(frontClone);
    downloadContainer.appendChild(backClone);
    
    await finalizeCardDownload(downloadContainer, 'both-sides');
}

async function processMultipleCardsDownload() {
    const cards = distributeContentAcrossCards();
    console.log(`Creating ${cards.length + 1} cards (1 front + ${cards.length} content cards)...`);
    
    // Create main container for all cards
    const downloadContainer = document.createElement('div');
    downloadContainer.style.cssText = `
        display: flex;
        gap: 20px;
        background: white;
        padding: 20px;
        position: fixed;
        left: -9999px;
        top: -9999px;
        z-index: -1000;
        flex-wrap: wrap;
        max-width: 1400px;
    `;
    
    // Get the front card (with basic stats only)
    const frontCard = document.getElementById('monster-card');
    const frontClone = frontCard.cloneNode(true);
    
    // Clear abilities and actions from front card clone to show only basic stats
    const frontAbilities = frontClone.querySelector('.abilities-section');
    const frontActions = frontClone.querySelector('.actions-section');
    if (frontAbilities) frontAbilities.innerHTML = '';
    if (frontActions) frontActions.innerHTML = '';
    
    frontClone.style.cssText = `
        margin: 0;
        transform: none;
        position: relative;
        width: 450px;
        height: 900px;
    `;
    downloadContainer.appendChild(frontClone);
    
    // Create content cards
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const contentCard = createContentCard(card, i + 2); // Start numbering from 2
        downloadContainer.appendChild(contentCard);
    }
    
    await finalizeCardDownload(downloadContainer, 'multiple-cards');
}

function createContentCard(cardData, cardNumber) {
    // Create a card container
    const cardDiv = document.createElement('div');
    cardDiv.className = 'monster-card';
    cardDiv.style.cssText = `
        margin: 0;
        transform: none;
        position: relative;
        width: 450px;
        height: 900px;
        background: linear-gradient(135deg, #4a4a4a 0%, #2d2d2d 100%);
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        color: white;
        font-family: 'Cinzel', serif;
        display: flex;
        flex-direction: column;
        border: 3px solid #d4af37;
    `;
    
    // Create header
    const header = document.createElement('div');
    header.innerHTML = `
        <div style="background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%); padding: 15px; text-align: center;">
            <h2 style="margin: 0; font-size: 1.5rem; color: #2d1810;">${nameInput.value || 'Monster'} - Part ${cardNumber}</h2>
        </div>
    `;
    cardDiv.appendChild(header);
    
    // Create content area
    const content = document.createElement('div');
    content.style.cssText = `
        padding: 20px;
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `;
    
    // Add abilities if any
    if (cardData.abilities.length > 0) {
        const abilitiesSection = document.createElement('div');
        abilitiesSection.innerHTML = `
            <h3 style="color: #d4af37; margin-bottom: 10px; font-size: 1.2rem;">Special Abilities</h3>
            <div style="font-size: 0.9rem; line-height: 1.4;">
                ${cardData.abilities.map(ability => `<p style="margin-bottom: 8px;">${formatText(ability)}</p>`).join('')}
            </div>
        `;
        content.appendChild(abilitiesSection);
    }
    
    // Add actions if any
    if (cardData.actions.length > 0) {
        const actionsSection = document.createElement('div');
        actionsSection.innerHTML = `
            <h3 style="color: #d4af37; margin-bottom: 10px; font-size: 1.2rem; margin-top: 20px;">Actions</h3>
            <div style="font-size: 0.9rem; line-height: 1.4;">
                ${cardData.actions.map(action => `<p style="margin-bottom: 8px;">${formatText(action)}</p>`).join('')}
            </div>
        `;
        content.appendChild(actionsSection);
    }
    
    cardDiv.appendChild(content);
    return cardDiv;
}

async function finalizeCardDownload(downloadContainer, type) {
    // Temporarily add to body
    document.body.appendChild(downloadContainer);
    
    // Wait for rendering and process images
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Convert all images to data URLs for better compatibility
    const images = downloadContainer.querySelectorAll('img');
    for (let img of images) {
        if (img.src && !img.src.startsWith('data:') && img.src.trim() !== '' && isValidImageUrl(img.src)) {
            try {
                console.log('Processing image:', img.src);
                const dataUrl = await convertImageToDataUrl(img.src);
                if (dataUrl) {
                    img.src = dataUrl;
                }
            } catch (error) {
                console.warn('Could not convert image:', img.src, error);
                // Try to ensure the image is loaded at least
                await new Promise((resolve, reject) => {
                    if (img.complete) {
                        resolve();
                    } else {
                        img.onload = resolve;
                        img.onerror = resolve; // Continue even if image fails
                        setTimeout(resolve, 2000); // Timeout after 2 seconds
                    }
                });
            }
        }
    }
    
    // Wait another moment for images to settle
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Generate image with html2canvas
    const canvas = await html2canvas(downloadContainer, {
        backgroundColor: '#ffffff',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: true,
        width: downloadContainer.offsetWidth,
        height: downloadContainer.offsetHeight,
        onclone: function(clonedDoc) {
            // Ensure all images are visible in the cloned document
            const clonedImages = clonedDoc.querySelectorAll('img');
            clonedImages.forEach(img => {
                if (img.style.display === 'none') {
                    img.style.display = 'block';
                }
            });
        }
    });
    
    // Remove temporary container
    document.body.removeChild(downloadContainer);
    
    // Create download link
    const link = document.createElement('a');
    const filename = type === 'multiple-cards' 
        ? `${nameInput.value || 'monster'}-cards-complete.png`
        : `${nameInput.value || 'monster'}-card-both-sides.png`;
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('Download completed successfully');
}

// Helper function to validate if a URL is a valid external image URL
function isValidImageUrl(url) {
    try {
        const urlObj = new URL(url);
        // Skip localhost, file:// and invalid protocols
        if (urlObj.hostname === 'localhost' || 
            urlObj.hostname === '127.0.0.1' || 
            urlObj.protocol === 'file:' ||
            !urlObj.protocol.startsWith('http')) {
            return false;
        }
        // Check if it looks like an image URL
        const path = urlObj.pathname.toLowerCase();
        return path.includes('.jpg') || path.includes('.jpeg') || 
               path.includes('.png') || path.includes('.gif') || 
               path.includes('.webp') || path.includes('.svg') ||
               url.includes('image') || url.includes('avatar') || url.includes('thumbnail');
    } catch (error) {
        return false;
    }
}

// Helper function to convert image URL to data URL
async function convertImageToDataUrl(imageUrl) {
    return new Promise((resolve, reject) => {
        // Try multiple methods to load the image
        
        // Method 1: Direct loading with CORS
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = function() {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.naturalWidth || img.width;
                canvas.height = img.naturalHeight || img.height;
                ctx.drawImage(img, 0, 0);
                const dataUrl = canvas.toDataURL('image/png');
                resolve(dataUrl);
            } catch (error) {
                console.warn('Canvas conversion failed, trying proxy method...');
                tryProxyMethod();
            }
        };
        
        img.onerror = function() {
            console.warn('Direct image load failed for:', imageUrl);
            tryProxyMethod();
        };
        
        // Method 2: Using a CORS proxy
        function tryProxyMethod() {
            console.log('Attempting proxy method for:', imageUrl);
            // Try a more reliable proxy service
            fetch(`https://cors-anywhere.herokuapp.com/${imageUrl}`, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
                .then(response => response.blob())
                .then(blob => {
                    const reader = new FileReader();
                    reader.onload = function() {
                        resolve(reader.result);
                    };
                    reader.onerror = function() {
                        tryFallbackMethod();
                    };
                    reader.readAsDataURL(blob);
                })
                .catch((error) => {
                    console.warn('Proxy method failed:', error.message);
                    tryFallbackMethod();
                });
        }
        
        // Method 3: Simple fallback - accept that some images can't be converted
        function tryFallbackMethod() {
            console.log('Using fallback - keeping original image URL');
            // Instead of trying another proxy, just return null to keep original image
            // The image will still appear in the download, just not as a data URL
            resolve(null);
        }
        
        // Add timeout
        setTimeout(() => {
            reject(new Error('Image load timeout'));
        }, 10000); // 10 second timeout
        
        // Start the process
        img.src = imageUrl;
    });
}

// Helper function to preload images in the card
async function preloadCardImages() {
    const cardImages = document.querySelectorAll('#monster-card img, #monster-card-back img');
    const promises = [];
    
    cardImages.forEach(img => {
        if (img.src && !img.src.startsWith('data:') && img.src.trim() !== '') {
            promises.push(
                new Promise((resolve) => {
                    if (img.complete && img.naturalWidth > 0) {
                        resolve();
                    } else {
                        img.onload = resolve;
                        img.onerror = resolve; // Continue even if image fails
                        setTimeout(resolve, 3000); // Timeout after 3 seconds
                    }
                })
            );
        }
    });
    
    return Promise.all(promises);
}

// Sample data for quick testing
function loadSampleData() {
    // Reset manual AC flag when loading sample data
    acManuallyEntered = false;
    
    if (currentLanguage === 'pt') {
        // Portuguese sample data
        nameInput.value = 'Dragão Vermelho Ancião';
        typeInput.value = 'Dragão Imenso, caótico maligno';
        acInput.value = '22 (Armadura Natural)';
        hpInput.value = '546 (28d20 + 252)';
        speedInput.value = '12m, escalada 12m, voo 24m';
        crInput.value = '24 (62.000 XP)';
        strInput.value = '30';
        dexInput.value = '10';
        conInput.value = '29';
        intInput.value = '18';
        wisInput.value = '15';
        chaInput.value = '23';
        cardColorSelect.value = 'red';
        cardLogoSelect.value = '🔥';
        
        abilitiesInput.value = `**Resistência Lendária (3/Dia).** Se o dragão falhar em um teste de resistência, ele pode escolher ter sucesso em vez disso.
**Presença Assustadora.** Cada criatura à escolha do dragão dentro de 36 metros deve fazer um teste de resistência de Sabedoria CD 21 ou ficar ***amedrontada*** por 1 minuto.
**Absorção de Fogo.** Sempre que o dragão for submetido a dano de fogo, ele não sofre dano e recupera pontos de vida iguais ao dano de fogo causado.
**Sentidos Aguçados.** O dragão tem vantagem em testes de Sabedoria (Percepção) que dependem de visão, audição ou olfato.
**Resistência à Magia.** O dragão tem vantagem em testes de resistência contra magias e outros efeitos mágicos.
**Detectar.** O dragão faz um teste de Sabedoria (Percepção).
**Ataque de Cauda.** O dragão faz um ataque de cauda.
**Ataque de Asa (Custa 2 Ações).** O dragão bate as asas, criando uma rajada poderosa.
**Ações de Covil.** Na contagem de iniciativa 20, o dragão executa uma ação de covil.`;
        
        actionsInput.value = `**Ataque Múltiplo.** O dragão pode usar sua Presença Assustadora. Em seguida, faz três ataques: um com sua mordida e dois com suas garras.
**Mordida.** *Ataque Corpo a Corpo com Arma:* +17 para acertar, alcance 4,5m, um alvo. Acerto: 21 (2d10 + 10) de dano perfurante mais 14 (4d6) de ***dano de fogo***.
**Garra.** *Ataque Corpo a Corpo com Arma:* +17 para acertar, alcance 3m, um alvo. Acerto: 17 (2d6 + 10) de dano cortante.
**Cauda.** *Ataque Corpo a Corpo com Arma:* +17 para acertar, alcance 6m, um alvo. Acerto: 19 (2d8 + 10) de dano contundente.
**Sopro de Fogo (Recarga 5-6).** O dragão exala fogo em um cone de 27 metros. Cada criatura na área deve fazer um teste de resistência de Destreza CD 24, sofrendo 91 (26d6) de ***dano de fogo*** em uma falha, ou metade em um sucesso.
**Ataque de Asa (Custa 2 Ações).** O dragão bate as asas. Cada criatura dentro de 4,5 metros do dragão deve ter sucesso em um teste de resistência de Destreza CD 25 ou sofrer 17 (2d6 + 10) de dano contundente e ser derrubada.
**Ações Lendárias (3 por turno).** O dragão pode executar 3 ações lendárias, escolhendo das opções abaixo.
**Mover.** O dragão se move até sua velocidade sem provocar ataques de oportunidade.
**Rugido.** O dragão usa sua habilidade Presença Assustadora.`;
    } else {
        // English sample data (original)
        nameInput.value = 'Ancient Red Dragon';
        typeInput.value = 'Gargantuan dragon, chaotic evil';
        acInput.value = '22 (Natural Armor)';
        hpInput.value = '546 (28d20 + 252)';
        speedInput.value = '40 ft., climb 40 ft., fly 80 ft.';
        crInput.value = '24 (62,000 XP)';
        strInput.value = '30';
        dexInput.value = '10';
        conInput.value = '29';
        intInput.value = '18';
        wisInput.value = '15';
        chaInput.value = '23';
        cardColorSelect.value = 'red';
        cardLogoSelect.value = '🔥';
        
        abilitiesInput.value = `**Legendary Resistance (3/Day).** If the dragon fails a saving throw, it can choose to succeed instead.
**Frightful Presence.** Each creature of the dragon's choice within 120 feet must make a DC 21 Wisdom saving throw or become ***frightened*** for 1 minute.
**Fire Absorption.** Whenever the dragon is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt.
**Keen Senses.** The dragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell.
**Magic Resistance.** The dragon has advantage on saving throws against spells and other magical effects.
**Detect.** The dragon makes a Wisdom (Perception) check.
**Tail Attack.** The dragon makes a tail attack.
**Wing Attack (Costs 2 Actions).** The dragon beats its wings, creating a powerful gust.
**Lair Actions.** On initiative count 20, the dragon takes a lair action to cause one of the following effects.`;
        
        actionsInput.value = `**Multiattack.** The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.
**Bite.** *Melee Weapon Attack:* +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) ***fire damage***.
**Claw.** *Melee Weapon Attack:* +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.
**Tail.** *Melee Weapon Attack:* +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.
**Fire Breath (Recharge 5-6).** The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) ***fire damage*** on a failed save, or half as much damage on a successful one.
**Wing Attack (Costs 2 Actions).** The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone.
**Legendary Actions (3 per turn).** The dragon can take 3 legendary actions, choosing from the options below.
**Move.** The dragon moves up to its speed without provoking opportunity attacks.
**Roar.** The dragon uses its Frightful Presence ability.`;
    }
    
    generateCard();
}

// Event listeners
generateBtn.addEventListener('click', generateCard);
downloadBtn.addEventListener('click', downloadCard);
addAttackBtn.addEventListener('click', showAttackForm);
confirmAttackBtn.addEventListener('click', confirmAttack);
cancelAttackBtn.addEventListener('click', cancelAttack);

// Language change listener
languageSelect.addEventListener('change', function() {
    translate(this.value);
});

// Color theme and logo change listeners
cardColorSelect.addEventListener('change', generateCard);
cardLogoSelect.addEventListener('change', generateCard);

// Setup AC calculator
setupACCalculator();

// Creature type change listener
typeInput.addEventListener('change', function() {
    typeCustomInput.style.display = this.value === 'custom' ? 'block' : 'none';
    generateCard();
});
typeCustomInput.addEventListener('input', generateCard);

// Card back event listeners
cardBackTypeSelect.addEventListener('change', function() {
    backImageGroup.style.display = this.value === 'image' ? 'block' : 'none';
    updateCardBack();
});
backImageInput.addEventListener('input', updateCardBack);
backImageUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            backImageInput.value = e.target.result;
            updateCardBack();
        };
        reader.readAsDataURL(file);
    }
});

// Main image upload event listener
imageUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageInput.value = e.target.result;
            generateCard();
        };
        reader.readAsDataURL(file);
    }
});

// Image position listeners
imageXSlider.addEventListener('input', updateImagePosition);
imageYSlider.addEventListener('input', updateImagePosition);
imageScaleSlider.addEventListener('input', updateImagePosition);
resetImageBtn.addEventListener('click', resetImagePosition);

// Auto-generate on input changes
const inputs = form.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        generateCard();
        // Update card back transparency for empty type
        if (cardBackTypeSelect.value === 'empty') {
            updateCardBack();
        }
    });
});

// Load sample data on page load for demonstration
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    languageSelect.value = currentLanguage;
    translate(currentLanguage);
    
    // Load preset monsters
    loadPresetMonsters();
    
    // Uncomment the line below to load sample data automatically
    // loadSampleData();
    
    // Generate initial empty card
    generateCard();
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        downloadCard();
    }
    if (e.ctrlKey && e.key === 'Enter') {
        e.preventDefault();
        generateCard();
    }
});

// Monster preset functionality
let presetMonsters = [];
const presetMonstersSelect = document.getElementById('preset-monsters');
const loadMonsterBtn = document.getElementById('load-monster-btn');

// Check if creatures folder exists and load monsters from multiple JSON files
async function loadPresetMonsters() {
    try {
        // First check if creatures folder exists by trying to fetch one file
        const testResponse = await fetch('creatures/beasts.json');
        if (!testResponse.ok) {
            // Creatures folder doesn't exist, hide the preset group
            console.log('Creatures folder not found, hiding preset monsters section');
            hidePresetMonstersSection();
            return;
        }
        
        const creatureTypes = ['beasts', 'constructs', 'dragons', 'humanoids', 'undead'];
        presetMonsters = [];
        let totalLoaded = 0;
        let hasAnyCreatures = false;
        
        // Load all creature types
        for (const type of creatureTypes) {
            try {
                const response = await fetch(`creatures/${type}.json`);
                if (response.ok) {
                    const data = await response.json();
                    
                    // Add type information to each monster
                    data.monsters.forEach(monster => {
                        monster.type = type;
                    });
                    
                    presetMonsters.push(...data.monsters);
                    totalLoaded += data.monsters.length;
                    hasAnyCreatures = true;
                    console.log(`Loaded ${data.monsters.length} ${type}`);
                }
            } catch (error) {
                console.warn(`Could not load ${type}:`, error);
            }
        }
        
        if (hasAnyCreatures) {
            // Populate the dropdown with organized groups
            populateCreatureDropdown();
            showPresetMonstersSection();
            console.log(`Total loaded ${totalLoaded} preset monsters from ${creatureTypes.length} creature types`);
        } else {
            // No creatures loaded, hide the section
            console.log('No creatures loaded, hiding preset monsters section');
            hidePresetMonstersSection();
        }
    } catch (error) {
        console.warn('Could not load preset monsters:', error);
        hidePresetMonstersSection();
    }
}

// Show preset monsters section
function showPresetMonstersSection() {
    const presetGroup = document.querySelector('.preset-group');
    if (presetGroup) {
        presetGroup.style.display = 'block';
    }
}

// Hide preset monsters section
function hidePresetMonstersSection() {
    const presetGroup = document.querySelector('.preset-group');
    if (presetGroup) {
        presetGroup.style.display = 'none';
    }
}

// Populate dropdown with creatures organized by type
function populateCreatureDropdown() {
    presetMonstersSelect.innerHTML = '<option value="">-- Select a preset monster --</option>';
    
    // Group monsters by type
    const groupedMonsters = {};
    presetMonsters.forEach((monster, index) => {
        const type = monster.type || 'other';
        if (!groupedMonsters[type]) {
            groupedMonsters[type] = [];
        }
        groupedMonsters[type].push({ monster, index });
    });
    
    // Add creatures organized by type
    Object.keys(groupedMonsters).sort().forEach(type => {
        if (groupedMonsters[type].length === 0) return;
        
        // Create optgroup for creature type
        const optgroup = document.createElement('optgroup');
        optgroup.label = type.charAt(0).toUpperCase() + type.slice(1);
        
        // Sort monsters by name within each type
        groupedMonsters[type].sort((a, b) => a.monster.name.localeCompare(b.monster.name));
        
        // Add options for this type
        groupedMonsters[type].forEach(({ monster, index }) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = monster.name;
            optgroup.appendChild(option);
        });
        
        presetMonstersSelect.appendChild(optgroup);
    });
}

// Load selected monster data
function loadSelectedMonster() {
    const selectedIndex = presetMonstersSelect.value;
    if (selectedIndex === '') return;
    
    const monster = presetMonsters[selectedIndex];
    if (!monster) return;
    
    console.log('Loading monster:', monster.name);
    console.log('Monster data:', monster);
    
    // Basic info
    nameInput.value = monster.name;
    crInput.value = monster.cr;
    acInput.value = monster.ac;
    // Reset manual AC flag when loading preset (this is not user input)
    acManuallyEntered = false;
    hpInput.value = monster.hp;
    speedInput.value = monster.speed;
    
    console.log('Basic info loaded:', {
        name: nameInput.value,
        cr: crInput.value,
        ac: acInput.value
    });
    
    // Type - fix custom type handling
    if (monster.customType) {
        typeInput.value = 'custom';
        typeCustomInput.value = monster.customType;
        typeCustomInput.style.display = 'block';
    } else if (monster.type) {
        typeInput.value = monster.type;
        typeCustomInput.style.display = 'none';
    }
    
    // Ability scores
    strInput.value = monster.str;
    dexInput.value = monster.dex;
    conInput.value = monster.con;
    intInput.value = monster.int;
    wisInput.value = monster.wis;
    chaInput.value = monster.cha;
    
    // Image
    if (monster.image) {
        imageInput.value = monster.image;
    }
    
    // Abilities - clear first
    abilitiesInput.value = '';
    if (monster.abilities && monster.abilities.length > 0) {
        abilitiesInput.value = monster.abilities.join('\n\n');
    }
    
    // Actions - clear first
    actionsInput.value = '';
    if (monster.actions && monster.actions.length > 0) {
        actionsInput.value = monster.actions.join('\n\n');
    }
    
    // Card customization
    if (monster.color) {
        cardColorSelect.value = monster.color;
    }
    if (monster.logo) {
        cardLogoSelect.value = monster.logo;
    }
    
    // Generate the card with the loaded data
    console.log('Calling generateCard() for monster:', monster.name);
    generateCard();
    
    console.log('Monster loaded successfully:', monster.name);
}

// Event listeners
loadMonsterBtn.addEventListener('click', loadSelectedMonster);

// Export sample data function for easy access
window.loadSampleData = loadSampleData;

// Medieval Header - Simple hover effects
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('medieval-header');
    const logoSpace = document.querySelector('.logo-space');
    
    // Add subtle interactions for logo placeholder
    if (logoSpace) {
        logoSpace.addEventListener('click', function() {
            // Placeholder for future logo upload functionality
            console.log('Logo upload placeholder clicked - future feature');
        });
    }
});
