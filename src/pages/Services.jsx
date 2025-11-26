import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function Services() {
    return (
        React.createElement("div", { className: "min-h-screen py-16 bg-gray-50" },
            React.createElement("div", { className: "container mx-auto px-4" },
                React.createElement("h1", { className: "text-3xl text-center mb-4" }, "All Services"),
                React.createElement("p", { className: "text-center text-gray-600 mb-8" }, "Browse all winter pet care services offered by WarmPaws"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" }, services.map((service) => (React.createElement(ServiceCard, { key: service.serviceId, service: service }))))))
    );
}
