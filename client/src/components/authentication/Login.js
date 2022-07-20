import { Sheet } from '@mui/joy'

function Login() {
    return (
        <Sheet
            sx={{
                maxWidth: 400,
                mx: 'auto', // margin left & right
                my: 4, // margin top & botom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
            }}
        >
            Welcome!
        </Sheet>
    )
} 