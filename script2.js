const cutOffMarks = {
    "Unreserved": 53.00,
    "OBC": 48.65,
    "SC": 49.40,
    "ST": 47.60
};

document.getElementById('cut-off-form').addEventListener('change', updateCutOffMarks);

function updateCutOffMarks() {
    const category = document.getElementById('category').value;
    document.getElementById('cut-off-marks').value = cutOffMarks[category];
}

function calculateChancePercentage(event) {
    event.preventDefault();
    const category = document.getElementById('category').value;
    const marksObtained = parseFloat(document.getElementById('marks-obtained').value);
    const cutOff = cutOffMarks[category];

    if (marksObtained >= cutOff) {
        const chancePercentage = (marksObtained / 135) * 100;
        document.getElementById('chance-percentage').innerHTML = `Chance Percentage: ${chancePercentage.toFixed(2)}%`;
        document.getElementById('result-message').innerHTML = `Your chance percentage for selection is: ${chancePercentage.toFixed(2)}%`;
    } else {
        const difference = cutOff - marksObtained;
        document.getElementById('chance-percentage').innerHTML = `Chance Percentage: 0%`;
        document.getElementById('result-message').innerHTML = `You need ${difference.toFixed(2)} more marks to reach the cut-off. Your chance percentage for selection is: 0%`;
    }
}