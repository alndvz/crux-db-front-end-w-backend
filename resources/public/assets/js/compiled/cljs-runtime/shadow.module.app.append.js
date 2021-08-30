
shadow.cljs.devtools.client.env.module_loaded('app');

try { articles.core.init(); } catch (e) { console.error("An error occurred when calling (articles.core/init)"); throw(e); }