import Navbar from "../Functional/Navbar";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';
import { Localization } from "../Localization/Localization";
import style from '../Styles/Welcome.module.css';

export const Welcome = () => {
    return (
        <>
            <Navbar />
            <div className={style.content}>
                <Card className={style.card}>
                    <CardMedia
                        sx={{ height: 210 }}
                        image="https://i.pinimg.com/550x/5a/da/c8/5adac811e0c915f7b9d9c0cacd3839be.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            L.I.C
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            सफलता का रहस्य यह है कि आप खुद पर विश्वास करें, और किसी भी हालत में हार न मानें।
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

                <div className={style.lists}>
                    <ImageList className={style.imagelist} cols={3} rowHeight={164}>
                        {Localization.itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>
        </>
    )
}