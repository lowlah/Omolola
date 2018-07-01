// Hide the element with the following ids.It hides the text "pick a color","Created Grid" and the color palette
$('#text,#color,#colorPicker').hide();

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (e){
    e.preventDefault();
    // show the hidden elements 
    $('#text,#color,#colorPicker').show();

    makeGrid(); 
});

// Function to create Grid
function makeGrid(){
    let height=$('#inputHeight').val(); //gets  height from user
    let width=$('#inputWeight').val(); // gets width from user

    // prevents a new grid from being added to already created grid.
    $('#pixelCanvas').empty();
    
    // loop to create rows
    for(let row=0;row<height;row++){   
        $('#pixelCanvas').append('<tr ></tr>');
        //loop to create cell for each row
        for(let cell=0;cell<width;cell++){ 
            $('tr:last').append('<td></td>');
        }
    }

    // when a user clicks on a cell,apply color to the cell based on color selected.
    $('td').click(function addColor(e){
        let chosenColor=$('#colorPicker').val();// Gets color from user
        $(this).css('background-color',chosenColor);
    })
};

// clears existing grid and input values.
$('#reset').click(function(e){
  let alert= window.confirm("Are you sure you want to reset Grid?");
    if (alert===true){
        // As long as <table> has a row,remove it.
        while ($('#pixelCanvas').children('tr').length > 0){
            $('#pixelCanvas').children('tr').detach();

            // Hide the following elements
            $('#text,#color,#colorPicker').hide();   
        }
    }
    else{
        e.preventDefault();
    }
});


