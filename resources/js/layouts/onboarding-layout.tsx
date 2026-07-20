import React from 'react';

const OnboardingLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center">
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default OnboardingLayout;
