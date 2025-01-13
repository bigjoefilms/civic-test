import { LoginButton, LogoutButton, useUser } from '@civic/auth/nextjs';

export default function Home() {
    const user = useUser();

    return (
        <div>
            <h1>Welcome to Civic Auth Example</h1>
            {user ? (
                <>
                    <p>Hello, {user.name}</p>
                    <LogoutButton>Logout</LogoutButton>
                </>
            ) : (
                <LoginButton>Login</LoginButton>
            )}
        </div>
    );
}
