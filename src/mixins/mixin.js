// We can use mixins to externalize popular pieces of codes
// which are used in different components.

// This mixin is used in showBlogs and listBlogs components
export default {
    computed: {
        // Instead of using filters use a computed property,
        // since its performance is better.
        filteredBlogs: function () {
        return this.blogs.filter((blog) => {
            return blog.title.toUpperCase().match(this.search.toUpperCase());
        })
        }
    },
    // Register filters and directives locally since they are only used in this component.
    filters: {
        // Instead of declaring name of the filter inside the quotations, it can be
        // declared as a function like, snippet(value){} (use camel case this time)
        'snippet': function(value) {
        return value.slice(0, 100) + '...';
        },
    },
    directives: {
        'theme': {
            bind(el, binding, vnode) {
            if (binding.value == 'wide') 
                el.style.maxWidth = "1200px";
            else if (binding.value == 'narrow') 
                el.style.maxWidth = "600px";

            if(binding.arg == "column")
            {
                el.style.background = '#ddd';
                el.style.padding = '20px';
            }
        }
        },
    },
    created() {
        this.$http.get('http://localhost:3000/blogs').then(function(data){
        // Do not show all the data, just show first 10
        this.blogs = data.body.slice(0, 10);
        });
    }
}