import { router } from '@inertiajs/react';

declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
    }
}

function getElementLabel(el: HTMLElement): string {
    const ariaLabel = el.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;

    const textContent = el.textContent?.trim();
    if (textContent && textContent.length <= 100) return textContent;

    const title = el.getAttribute('title');
    if (title) return title;

    if (el instanceof HTMLAnchorElement) return el.href;

    const id = el.getAttribute('id');
    if (id) return `#${id}`;

    return el.tagName.toLowerCase();
}

export function initAnalytics(): void {
    // Track Inertia SPA page navigations
    router.on('navigate', (event) => {
        const url = event.detail.page.url;

        window.gtag('event', 'page_view', {
            page_path: url,
            page_title: document.title,
        });
    });

    // Track all button and link clicks via event delegation
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        // Find closest clickable element (button or link)
        const clickable = target.closest('a, button, [role="button"], [role="link"]');
        if (!clickable) return;

        const element = clickable as HTMLElement;
        const label = getElementLabel(element);

        if (element instanceof HTMLAnchorElement) {
            const isExternal =
                element.hostname !== window.location.hostname;

            window.gtag('event', 'link_click', {
                link_text: label,
                link_url: element.href,
                link_external: isExternal,
                link_location: window.location.pathname,
            });
        } else {
            window.gtag('event', 'button_click', {
                button_text: label,
                button_type:
                    element.getAttribute('type') || 'button',
                button_id: element.id || undefined,
                button_class: element.className || undefined,
                click_location: window.location.pathname,
            });
        }
    });
}
