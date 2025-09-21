'use client';

import { Paper, Box, Button } from '@mui/material';

export default function ProductCard({ image, onBuy, sx }) {
    return (
        <Paper
            elevation={6}
            sx={{
                borderRadius: 5,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                background: "#ffffff",
                zIndex: 3,
                transition: "transform 0.3s ease-in-out",
                ...sx
            }}
        >
            {/* Картинка */}
            <Box
                component="img"
                src={image}
                alt="Товар"
                sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    flexGrow: 1,
                    objectFit: 'contain',
                    mb: 2,
                }}
            />

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