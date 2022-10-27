import { Parallax } from 'react-parallax';

const ParallaxElement = ({bg, height}) => {
    return (
        <Parallax bgImage={bg} bgImageAlt="parallax element" strength={150}>
            <div style={{height: `${height}`}} />
        </Parallax>
    )
}

export default ParallaxElement

