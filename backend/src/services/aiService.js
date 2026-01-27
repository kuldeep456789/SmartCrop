// Placeholder for AI model
// In a real scenario, this would call a Python flask service or an LLM API
const getCropRecommendation = async (data) => {
    const { nitrogen, phosphorus, potassium, ph, rainfall, city } = data;

    // Simulated Artificial Intelligence Logic
    // This "model" uses basic heuristics for demonstration
    // In Phase 2, this will connect to the trained ML model

    let recommendations = [];

    // Logic based on general agricultural knowledge
    if (ph < 5.5) recommendations.push('Tea', 'Coffee');
    else if (ph > 7.5) recommendations.push('Barley', 'Cotton');
    else recommendations.push('Wheat', 'Rice');

    if (rainfall > 200) {
        if (!recommendations.includes('Rice')) recommendations.push('Rice');
        recommendations.push('Jute');
    } else if (rainfall < 60) {
        recommendations.push('Bajra', 'Mustard');
    }

    // Ensure we have unique values
    recommendations = [...new Set(recommendations)];

    // Fallback
    if (recommendations.length === 0) {
        recommendations = ['Wheat', 'Maize'];
    }

    return {
        recommended_crops: recommendations,
        confidence: "87%",
        analysis: `Based on the provided soil pH (${ph}) and rainfall data, the soil conditions favor ${recommendations[0]}.`,
        market_trend: "High demand expected next season."
    };
};

module.exports = { getCropRecommendation };
