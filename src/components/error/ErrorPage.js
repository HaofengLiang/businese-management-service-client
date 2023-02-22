import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function ErrorPage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Oops, something went wrong. Please try again later.
                </Typography>
            </Container>
        </React.Fragment>
    );
};