'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import {Box, Button, Typography, IconButton, CircularProgress} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Marquee from "react-fast-marquee";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import ProductCard from "@/app/card";

const MotionImage = motion.create(Image);
const MotionBox = motion.create(Box);

function getRandomOffset(X) {
    // возвращает случайное значение от -X до +X
    return Math.floor(Math.random() * (2 * X + 1)) - X;
}

export default function Page() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    const isSmUp = useMediaQuery(theme.breakpoints.down('sm'));

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const [loading, setLoading] = useState(true);
    const [loadedCount, setLoadedCount] = useState(0);
    const totalToLoad = 6

    useEffect(() => {
        if (loadedCount >= totalToLoad) {
            setLoading(false);

            if (audioRef.current) {
                audioRef.current.volume = 0.3;
                // audioRef.current
                //     .play()
                //     .then(() => setIsPlaying(true))
                //     .catch(() => {
                //         setIsPlaying(false);
                //     });
            }
        }

    }, [loadedCount]);

    const handleLoaded = () => {
        setLoadedCount(prev => prev + 1);
    };

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handleStop = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 30; // наклон по X
        const y = (e.clientY / innerHeight - 0.5) * 30; // наклон по Y
        if (isMdUp) {
            setMousePos({ x, y });
        }
    };

    const tickerText = "Поддержи команду своей атрибутикой! Стильный шарф и бант для болельщиков! 🚀 Доставка 1–2 дня! 🛒 Количество ограничено!";

    return (
        <Box
            onMouseMove={handleMouseMove}
            sx={(theme) =>(
                {
                    height: '100vh',
                    background: `radial-gradient(circle at top left, rgba(255,255,255,0.15) 0%, transparent 40%),
                                 radial-gradient(circle at top right, rgba(255,255,255,0.15) 0%, transparent 40%),
                                 linear-gradient(180deg, #0f172a 0%, #001C3DFF 100%)`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'end',
                    textAlign: 'center',
                    color: 'text.primary',
                    position: 'relative',
                    overflow: 'hidden',
                    px: 2,
                    perspective: '1000px'
                }
            )}
        >
            <audio ref={audioRef} src="/anthem.mp3" onLoadedData={handleLoaded}/>

            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                sx={{
                    dispaly: "flex",
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    zIndex: 4
                }}>
                {!isPlaying ? (
                    <IconButton
                        onClick={handlePlay}
                        sx={{ bgcolor: "rgba(0,0,0,0.2)"}}
                    >
                        <PlayArrowIcon fontSize="large" sx={{color: '#696969'}}/>
                    </IconButton>
                ) : (
                    <IconButton
                        onClick={handleStop}
                        sx={{ bgcolor: "rgba(0,0,0,0.2)"}}
                    >
                        <StopIcon fontSize="large" sx={{color: '#696969'}}/>
                    </IconButton>
                )}
            </MotionBox>

            <MotionImage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src={"/spotlights.png"}
                alt={'aaa'}
                onLoadingComplete = {handleLoaded}
                fill
                style={{
                    objectFit: "cover",
                    inset: 0,
                    transform: `scale(1.2) translateY(-250px) translate3d(${mousePos.x / 6}px, ${mousePos.y / 6}px, -200px)`,
                    zIndex: -1,
                    filter: "blur(3px)"
                }}
            />

            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'start',
                    position: 'absolute',
                    top: 20,
                    width: '100%',
                    gap: '12px'
                }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: {xs: '65px',sm: '100px'},
                    width: '100%',
                    gap: '2px'
                }}>
                    <Box width={{xs: '65px',sm: '100px'}} height={'100%'} position={'relative'}>
                        <Image src={'/Kairat.png'}
                               alt={"blabla"}
                               onLoadingComplete = {handleLoaded}
                               fill
                               style={{
                                   objectFit: "contain",
                                   zIndex: 1,
                                   transform: 'scale(0.97)'
                               }}/>
                    </Box>
                    <Box width={{xs: '65px',sm: '100px'}} height={'100%'} position={'relative'}>
                        <Image src={'/uefaLogo.png'}
                               alt={"blabla"}
                               onLoadingComplete = {handleLoaded}
                               fill
                               style={{
                                   objectFit: "contain",
                                   zIndex: 1}}/>
                    </Box>
                    <Box width={{xs: '65px',sm: '100px'}} height={'100%'} position={'relative'}>
                        <Image src={'/RealMadrid.png'}
                               alt={"blabla"}
                               onLoadingComplete = {handleLoaded}
                               fill
                               style={{
                                   objectFit: "contain",
                                   zIndex: 1}}/>
                    </Box>
                </Box>
                <Typography variant='body1' fontSize='18px' fontFamily='Champions'>
                    23 сентября 17:00 | Центральный стадион г. Алматы
                </Typography>
            </MotionBox>



            <MotionBox
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                    mb: {xs: '40px', sm: 0},
                    position: 'relative',
                    display: {xs: 'flex', sm: 'block'},
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    height: '88vh',
                    top: '1vh'
            }}>

                <Typography
                    variant="h1"
                    sx={{
                        fontWeight: 900,
                        color: '#FFC300',
                        mx: 'auto',
                        textShadow: '0 2px 5px rgba(0,0,0,0.6)',
                        position: 'relative',
                        width: {xs: "90vw", lg: '100%'},
                        fontSize: {xs: '3rem', sm: '4.5rem', md: '6rem', lge: '7rem', xl: '7.5rem', xxl: '9rem'},
                        top: '15px',
                        zIndex: 2,
                    }}
                >
                    БОЛЕЙ ПРАВИЛЬНО!
                </Typography>


                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>

                    <MotionBox
                        initial={{ opacity: 0, x: -150, rotate: -20 }}
                        animate={{ opacity: 1, x: 0, rotate: 0  }}
                        transition={{ duration: 0.8 }}
                        sx={{
                            display: {xs: 'none', sm: 'block'},
                            transform: `translate3d(${mousePos.x / 4}px, ${mousePos.y / 4}px, 150px)`,
                            zIndex: 3,
                        }}
                    >
                        <ProductCard
                            onBuy={'https://kaspi.kz/shop/p/sharf-30351263-591411006-poliester-140-x-14-sm-145935179/?c=196243100&m=6467049&sr=26'}
                            sx={{
                                width: {xs: '250px', md: '300px', lg: '350px', xl:'400px', xxl:'450px'},
                                height: {xs: '250px', md: '300px',lg: '350px', xl:'400px', xxl:'450px'},
                                position: 'relative',
                                transform: 'rotateZ(-18deg)',
                                transformStyle: 'preserve-3d',
                                "&:hover": {
                                    transform: `scale(1.05) rotateZ(-15deg)`,
                                },
                            }}/>
                    </MotionBox>

                    <Box
                        sx ={{
                            display: {xs: 'none', sm: 'block'},
                            width: {xs: '35vw', lg:'40vw', xl:'40vw'},
                            height: {xs:'50vh', md: '50vh', lg:'55vh'},
                        }}
                    >
                        <Image
                            src={"/FootballFan2.png"}
                            alt={"blabla"}
                            onLoadingComplete = {handleLoaded}
                            fill
                            style={{
                                objectFit: "contain",
                                transform: "translateX(40px)",
                                zIndex: 1}}
                        />
                    </Box>

                    <MotionBox
                        initial={{ opacity: 0, x: 150, rotate: 20 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 0.8 }}
                        sx={{
                            display: {xs: 'none', sm: 'block'},
                            transform: `translate3d(${mousePos.x / 4}px, ${mousePos.y / 4}px, 150px)`,
                            zIndex: 3,
                        }}
                    >
                        <ProductCard
                            onBuy={'https://kaspi.kz/shop/p/obodok-bant-1-sht-mul-tikolor-145947974/?c=196243100&m=6467049&sr=23'}
                            sx={{
                                width: {xs: '250px', md: '300px', lg: '350px', xl:'400px', xxl:'450px'},
                                height: {xs: '250px', md: '300px', lg: '350px', xl:'400px', xxl:'450px'},
                                position: 'relative',
                                transform: 'rotateZ(18deg)',
                                transformStyle: 'preserve-3d',
                                "&:hover": {
                                    transform: `scale(1.05) rotateZ(15deg)`,
                                },
                            }}/>
                    </MotionBox>
                </Box>

                <Box
                    sx ={{
                        position: 'relative',
                        display: {xs: 'block', sm: 'none'},
                        width: '100%',
                        height: '250px',
                    }}
                >
                    <Image
                        src={"/FootballFan2.png"}
                        alt={"blabla"}
                        onLoadingComplete = {handleLoaded}
                        fill
                        style={{
                            objectFit: "contain",
                            transform: "translateX(15px)",
                            zIndex: 1}}
                    />
                </Box>

                <Typography
                    variant="h2"
                    sx={{
                        mx: 'auto',
                        textShadow: '0 2px 5px rgba(0,0,0,0.5)',
                        fontSize: {xs: '1.8rem', sm: '3rem', md: '4rem', lg: '4.5rem', xl: '5rem', xxl: '5.5rem'},
                        position: 'relative',
                        zIndex: 2,
                        width: {xs: "90%", md: '95%', xxl: '100%'}
                    }}
                >
                    КУПИ ФИРМЕННУЮ АТРИБУТИКУ!
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    size='small'
                    //onClick={}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        borderRadius: 3,
                        fontWeight: 700,
                        minWidth: '300px',
                        py: 1.5,
                        fontSize: '1rem',
                    }}
                >
                    Купить
                </Button>

            </MotionBox>

            {/* Бегущая строка (marquee effect) */}
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: {xs: "40px", sm: "60px", lg: '80px'},
                    background: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    zIndex: 999,
                    whiteSpace: "nowrap"
                }}
            >
                <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover={false} // при наведении останавливается
                >
                    <span style={{ marginRight: '2rem', fontWeight: 'bold', color: 'white', fontSize: isSmUp ? '1rem' : '1.3rem' }}>
                        {tickerText}
                    </span>
                </Marquee>
            </Box>

            <Box sx={{
                position: 'absolute',
                right: "20px",
                bottom: {xs: "40px", sm: "60px", lg: '80px'},
                width: "120px",
                height: "100px"
            }}>
                <Image src={'/LogoBaza.jpg'} alt={'blabla'} fill style={{objectFit: "contain"}}/>
            </Box>

            {loading &&(
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                    width="100vw"
                    color="white"
                    sx={{
                        zIndex: 1000,
                        background: `radial-gradient(circle at top left, rgba(255,255,255,0.15) 0%, transparent 40%),
                        radial-gradient(circle at top right, rgba(255,255,255,0.15) 0%, transparent 40%),
                        linear-gradient(180deg, #0f172a 0%, #001C3DFF 100%)`,
                    }}
                >
                    <CircularProgress color="inherit" size={60} />
                </Box>
            )}
        </Box>
    );
}
