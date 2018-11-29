# Image Slice
### v1.0.0

Image Slice is a small jQuery image joiner plugin that augments the image fast load to the website.

### Features of this Plugin
- It's (slightly) faster for a web browser to arrange the image completely from scattered parts

# Initialize

## HTML

``` html
<link rel="stylesheet" href="style.min.css" />
<script type="text/javascript" src="jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="image-slice.min.js"></script>

<div class="wrapper">            
    <div id="imageslice" class="imageslice"></div>
</div>

```
## jQuery

``` js
$(function(){
    $('.imageslice').imageSlice({
        height : 120,           //  (Number) | height of the image single piece
        width : 160,            //  (Number) | width of the image single piece
        count : 16,             //  (Number) | Number of image pieces
        column : 4,             //  (Number) | Number of image piece should be aligned in the row
        padding : 0,            //  (Number) | Padding between image pieces
        path : 'images/',       //  (String) | Path of image pieces
        prefix : 'image_',      //  (String  | '') | Prefix of image piece
        extention : 'png',      //  (String) |  Extention of the image piece
    });
});
```

### Demo
[VIEW DEMO](https://anfathhifans.github.io/imageslice/)

