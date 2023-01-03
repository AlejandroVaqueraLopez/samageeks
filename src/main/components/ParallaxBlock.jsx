import { Parallax } from 'react-parallax';

const ParallaxBlock = ({bg, height}) => {
    return (
        <Parallax bgImage={bg} bgImageAlt="the cat" strength={300}>
            <div style={{height: `${height}`, background: `linear-gradient(to top, rgba(255,255,255, 0.8), rgba(255,255,255, 0.1))`}}></div>
        </Parallax>
    )
}

export default ParallaxBlock
