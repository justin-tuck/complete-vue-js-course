export const awesome = {
    created(el) {
        console.log('created')
        console.log(el.parentNode)
    },
    beforeMount(el, binding, vnode) {
        console.log('beforeMount')
        console.log(el.parentNode)
        // el is refernce to the element you are attached to
        // binding (event property)
        // vnode is the virtual node

        el.innerHTML = binding.value;
        el.style.color = binding.arg ? binding.arg : 'green';
        el.style.fontSize = binding.modifiers.big ? '20px' : '12px'
    },
    mounted(el) {
        console.log('mounted')
        console.log(el.parentNode)
    },
    beforeUpdate(el,binding) {
        console.log('beforeUpdate')
        console.log(el.parentNode)
        el.innerHTML = binding.value
    },
    updated(el) {
        console.log('updated')
        console.log(el.parentNode)
    },
    beforeUnmount(el) {
        console.log('beforeUnmount')
        console.log(el.parentNode)
    },
    unmounted(el) {
        console.log('unmounted')
        console.log(el.parentNode)
    }
}