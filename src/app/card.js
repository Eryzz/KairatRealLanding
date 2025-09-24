'use client';

import Image from "next/image";
import { Paper, Box, Button } from '@mui/material';

export default function ProductCard({ image, alt, onBuy, sx }) {
    return (
        <Paper
            elevation={6}
            sx={{
                borderRadius: 5,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: "8px",
                justifyContent: 'space-between',
                p: 2,
                background: "#ffffff",
                zIndex: 3,
                transition: "transform 0.3s ease-in-out",
                ...sx
            }}
        >
            <Box
                sx={{
                    //border: 'solid 1px #A2A2A2FF',
                    //borderRadius: 3,
                    width: '100%',
                    height: "100%",
                    position: 'relative'
                }}>
                {/* Картинка */}
                <Image
                    src={image}
                    alt={alt}
                    fill
                    style={{
                        objectFit: "contain",
                        zIndex: 1}}
                />
            </Box>

            {/* Кнопка CTA */}
            <Button
                className='CTA'
                variant="contained"
                color="primary"
                target="_blank"
                rel="noopener noreferrer"
                href={onBuy}
                fullWidth
                sx={{
                    borderRadius: 3,
                    fontWeight: 700,
                    py: 1.5,
                    fontSize: '1rem',
                }}
            >
                Купить
            </Button>
        </Paper>
    );
}