<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        function ajaxCall(type, search_location) {
            $.ajax({
                method : 'get',
                dataType : 'json',
                data : {
                    'location' : search_location,
                    'type' : type,
                },
                url : 'yelp.php',
                success: function (response){
                    restaurants = response;
                    console.log('O');
                    $('div').text(type + search_location);
                },
                error: function (response){
                    console.log('x');
                }
            })
        }
    </script>
</head>
<body>
<form>
    locatioin<input type="text" name="location">
    type<input type="text" name="type">
    <input type="submit" value="submit">
</form>
<div>
    asd
</div>
</body>
</html>