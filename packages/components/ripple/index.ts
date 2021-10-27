import { App, Directive, DirectiveBinding, Plugin } from "@vue/runtime-core"
import './Ripple.scss'

interface RippleOptions {
    // removerRipple: any
    tasker?: number | null
    color?: string
    disabled?: boolean
}

interface RippleHTMLElement extends HTMLElement {
    _ripple?: RippleOptions
}

interface RippleStyles {
    x: number
    y: number
    centerX: number
    centerY: number
    size: number
}

function computeRippleStyles(element: RippleHTMLElement, event: MouseEvent): RippleStyles {
    const { top, left }: DOMRect = element.getBoundingClientRect()
    const { clientWidth, clientHeight } = element

    const radius: number = Math.sqrt(clientWidth ** 2 + clientHeight ** 2) / 2
    const size: number = radius * 2

    const localX: number = event.screenX - left
    const localY: number = event.screenY - top

    const centerX: number = (clientWidth - radius * 2) / 2
    const centerY: number = (clientHeight - radius * 2) / 2

    const x: number = localX - radius
    const y: number = localY - radius

    return { x, y, centerX, centerY, size }
}

function setStyles(element: RippleHTMLElement) {
    const { zIndex, position } = window.getComputedStyle(element)

    element.style.overflow = 'hidden'
    element.style.overflowX = 'hidden'
    element.style.overflowY = 'hidden'
    position === 'static' && (element.style.position = 'relative')
    zIndex === 'auto' && (element.style.zIndex = '1')
}

function createRipple(this: RippleHTMLElement, event: MouseEvent) {
    const _ripple = this._ripple as RippleOptions

    if (_ripple.disabled || _ripple.tasker) {
        console.log('123');
        return
    }

    const task = () => {
        _ripple.tasker = null
        console.log('task');

        const { x, y, centerX, centerY, size }: RippleStyles = computeRippleStyles(this, event)
        const ripple: RippleHTMLElement = document.createElement('div')
        console.log('event', event.detail);
        ripple.classList.add('sx-ripple')
        ripple.style.opacity = `0`
        ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.3, .3, .3)`
        ripple.style.width = `${size}px`
        ripple.style.height = `${size}px`
        ripple.style.backgroundColor = _ripple.color ?? 'currentColor'
        ripple.dataset.createdAt = String(performance.now())
        setStyles(this)
        this.appendChild(ripple)
        console.log('this-2', this);
        window.setTimeout(() => {
            ripple.style.transform = `translate(${centerX}px, ${centerY}px) scale3d(1, 1, 1)`
            ripple.style.opacity = `.25`
        }, 20)
    }

    _ripple.tasker = window.setTimeout(task, 60)

    console.log('create');
}

function mounted(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
    el._ripple = {
        tasker: null,
        ...(binding.value ?? {}),
    }
    console.log('el.ripple', el._ripple);

    el.addEventListener('mousedown', createRipple, { passive: true })
}

const Ripple: Directive & Plugin = {
    mounted,
    install(app: App) {
        app.directive('ripple', this)
    }
}

export const _RippleComponent = Ripple

export default Ripple