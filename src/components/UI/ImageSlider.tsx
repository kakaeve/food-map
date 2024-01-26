import food1 from '../../../public/assets/images/food/food1.jpg'
import food2 from '../../../public/assets/images/food/food2.jpg'
import food3 from '../../../public/assets/images/food/food3.jpg'
import food4 from '../../../public/assets/images/food/food4.jpg'
import food5 from '../../../public/assets/images/food/food5.jpg'
import food6 from '../../../public/assets/images/food/food6.jpg'
import food7 from '../../../public/assets/images/food/food7.jpg'
import food8 from '../../../public/assets/images/food/food8.jpg'
import food9 from '../../../public/assets/images/food/food9.jpg'
import food10 from '../../../public/assets/images/food/food10.jpg'
import classes from './ImageSlider.module.css'

const DUMMY_IMAGES = [food1, food2, food3, food4, food5, food6, food7, food8, food9, food10]

const ImageSlider = () => {
  const images1 = [food1, food2, food3, food4, food5]
  return (
    <div className={classes.imageContainer}>
      <div className={classes.imageGroup}>
        <img src={food1} alt="" className={classes.image} />
        <img src={food2} alt="" className={classes.image} />
        <img src={food3} alt="" className={classes.image} />
        <img src={food4} alt="" className={classes.image} />
        <img src={food5} alt="" className={classes.image} />
        <img src={food1} alt="" className={classes.image} />
        <img src={food2} alt="" className={classes.image} />
        <img src={food3} alt="" className={classes.image} />
        <img src={food4} alt="" className={classes.image} />
        <img src={food5} alt="" className={classes.image} />
        <img src={food1} alt="" className={classes.image} />
        <img src={food2} alt="" className={classes.image} />
        <img src={food3} alt="" className={classes.image} />
        <img src={food4} alt="" className={classes.image} />
        <img src={food5} alt="" className={classes.image} />
        <img src={food1} alt="" className={classes.image} />
        <img src={food2} alt="" className={classes.image} />
        <img src={food3} alt="" className={classes.image} />
        <img src={food4} alt="" className={classes.image} />
        <img src={food5} alt="" className={classes.image} />
      </div>
    </div>
  )
}

export default ImageSlider
