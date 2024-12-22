import React from 'react';

const Pricing = () => {
    const pricingPlans = [
        {
            name: "Basic",
            description: "Perfect for individual shoots and small events.",
            price: "৳20,000",
            details: [
                "1 hour session",
                "Up to 3 edited photos",
                "Online gallery"
            ]
        },
        {
            name: "Standard",
            description: "Ideal for family portraits, engagement shoots, or small events.",
            price: "৳50,000",
            details: [
                "3 hour session",
                "Up to 10 edited photos",
                "Online gallery + USB drive with images"
            ]
        },
        {
            name: "Premium",
            description: "The best option for large events or professional corporate shoots.",
            price: "৳100,000",
            details: [
                "Full day session (8 hours)",
                "Up to 30 edited photos",
                "Online gallery + USB drive + physical album",
                "Custom editing & retouching"
            ]
        },
        {
            name: "University Special",
            description: "Exclusive package for university events and shoots.",
            price: "৳30,000",
            details: [
                "5 hours session",
                "Up to 15 edited photos",
                "Group photos + Event coverage",
                "Online gallery"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white md:py-10 py-5">
            <div className="">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Pricing</h2>
                    <p className="md:w-2/3 mx-auto text-center text-gray-400">
                        Explore our competitive pricing plans designed for all types of photography sessions. Whether you are planning a wedding, portrait session, a corporate shoot, or a university event, we have a plan for you.
                    </p>
                </div>

                {/* Pricing Plans */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-xl">
                            <h3 className="text-2xl text-blue-600 font-semibold mb-2">{plan.name}</h3>
                            <p className=" text-black mb-2">{plan.description}</p>
                            <p className=" font-bold text-black">{plan.price}</p>
                            <ul className="text-black mb-6">
                                {plan.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">Book Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
