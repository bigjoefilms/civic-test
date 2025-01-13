import { getUser } from '@civic/auth/nextjs';

export default async function ProtectedPage() {
    const user = await getUser();

    if (!user) {
        return (
            <div>
                <h1>Access Denied</h1>
                <p>You need to log in to access this page.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome, {user.name}!</p>
        </div>
    );
}
