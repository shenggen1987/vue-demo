import Vue from 'vue'

let structure = Vue.extend(require('./index.vue'))

let catchInstance = []

let createdInstance = function (o) {
	if(catchInstance.length) {
		let instance = catchInstance[0]
		catchInstance.splice(0, 1)
		return instance
	}
	return new o ({
		el: document.createElement('div')
	})
}

let storageInstance = function (o) {
	o && catchInstance.push(o)
}

export default function (options) {

	let showStatus = options.show

	let instance = createdInstance(structure)

	instance.type = options.type || 0
	instance.show = options.show 

	if(showStatus) {
		instance.$appendTo(document.body)
	}

	storageInstance(instance)
} 