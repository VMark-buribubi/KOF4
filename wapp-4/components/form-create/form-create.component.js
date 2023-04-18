export default {
    data() {
        return {
            jsonValue: ''
        }
    },

    methods: {
        submit() {
            this.$emit('create', this.jsonValue)
            this.jsonValue = ''
        }
    },

    template: `
        <form class="row g-3 form form-create">
            <textarea class="form-control" rows="10" v-model="jsonValue" placeholder="Enter student's details..."></textarea>
            <div class="col-12">
                <button
                    type="button"
                    class="button"
                    @click="submit"
                >Add new Student</button>
            </div>
        </form>
    `
}