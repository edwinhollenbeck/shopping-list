function addItem() {
  $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        if ($('#shopping-list-entry').val().length == 0) {
          ;
        } else {
        $('.shopping-list').append(String.raw`<li>
        <span class="shopping-item">${$('#shopping-list-entry').val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
    }});
};


function checkItem() {
  $('.shopping-list').on("click", ".shopping-item-toggle", function(event) { 
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });
};


function deleteItem() {
  $('.shopping-list').on("click", ".shopping-item-delete", function(event) {
    $(this).closest("li").remove();
  });
};


$(addItem());
$(checkItem());
$(deleteItem());
