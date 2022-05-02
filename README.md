## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

# From scratch planning

## Add ingredients section
* Heading
* Form with inputs for ingredient, qty, measurement, button
* Button for removing last item
* List for keeping track of ingredients/qty/measurements <ul>

### Events
1. Add ingredient (form submit)

2. Remove last item (button click)

### Data model (state)
* An array of ingredients with the following structure: 

{ingredient: 'black beans', quantity: 1, measurements: 'cups'}

### Functions
* renderIngredient -- create an <li> for an ingredient object
* displayIngredients -- clear ingredient list, loop through each ingredient, call renderIngredient, append <li> to the list

### Ingredients section do to list
Adding ingredients
1.  [ ] Make the form
2.  [ ] Add a form event listener
3.  [ ] Create an ingredient object from the form data
3a. [ ] Push the ingredient onto the ingredients array (state)
4.  [ ] Write my `renderIngredient` function
5.  [ ] Write my `displayIngredients` function (calling `renderIngredient` for each item)
Removing ingredients
1.  [ ] Add remove button 
2.  [ ] Add event listener to button
3.  [ ] Remove the last item from the ingredients array
4.  [ ] Call `displayIngredients`

## Save meal section
### HTML elements
* Heading
* Save button
* Meal name Input

### Event
* Save button click

### State
* Array of meals

{
  name: 'Black bean salad',
  IngredientCount: 2
}

### Functions
* `renderMeal` - return an <li> with the meal info
* `displayMeals` - clears the list of meals, loops through the state and calls `renderMeal` for meal in state

### To do list
- [ ] Add input and button html
- [ ] Add button event listener
- [ ] Create the meal object using the input value as well as the current list of ingredients
- [ ] Push the meal object onto the meals array
- [ ] Clear out the ingredients state and call `displayIngredients`
- [ ] Write our `renderMeal` function
- [ ] Write `displayMeals` function (calling `renderMeal` for each item in the meals array)
- [ ] Call `displayMeals`