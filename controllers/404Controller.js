

export const Error404 = (req, res, next) => {
    res.status(404).render("404.hbs", { layout: false, title: "Not found" });

}