$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
        success: function(response) {
            const meals = response.meals;
            const itemsContainer = $('#myitems');

            meals.forEach(meal => {
                const mealItem = `
                    <div class="item">
                        <h2>${meal.strMeal}</h2>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="img-fluid">
                    </div>
                `;
                itemsContainer.append(mealItem);
            });
        },
        error: function(error) {
            console.error("Error fetching data:", error);
            const itemsContainer = $('#myitems');
            itemsContainer.append('<p class="error-message">Failed to load meals. Please try again later.</p>');
        }
    });
});
