import { Registry } from './registry'

const registry = new Registry();

export const storeService = (name: string, url: string) => {
    if (!name || !url) {
        throw new Error('invalid request');
    };

    registry.store(name, url);
    return {
        success: true
    };
};

export const getService = (name: string) => {
    if (!name) {
        throw new Error('invalid request');
    };

    const url = registry.get(name);
    if (!url) {
        throw new Error('not found');
    };

    return {
        success: true,
        url
    };
};

export const updateService = (name: string, url: string) => {
    if (!name || !url) {
        throw new Error('invalid request');
    };

    registry.update(name, url);
    return {
        success: true
    };
};

export const deleteService = (name: string) => {
    if (!name) {
        throw new Error('invalid request');
    };

    registry.remove(name);
    return {
        success: true
    }
}