

<ImageList sx={{ height: "inherit",width: 600,overflowY: "auto"}} gap = {10}>
{CategoryList.map((item) => (
    <ImageListItem sx={{objectFit : "cover",height : "100%",width: "100%"}} key={item.food_name}>
        <img 
          src={`${item.image_url}?w=248&fit=crop&auto=format`}
          srcSet={`${item.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.food_name}
          loading="lazy"
        />
        <a href= {`./food-categories/${item.food_name}`}>
          <ImageListItemBar
            className= "caption"
            title={item.food_name}
            position="bottom"
          />
       </a>
    </ImageListItem>
  
))}
</ImageList>