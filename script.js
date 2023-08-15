function toggleDetails(detailsElement) {
  const allDetails = document.querySelectorAll(".categories");

  allDetails.forEach(details => {
      if (details !== detailsElement) {
          details.open = false;
      }
  });

  if (!detailsElement.open) {
      const summaryElement = detailsElement.querySelector(".categories-title");
      if (summaryElement) {
          summaryElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  }
}

function toggleAndScroll(summaryElement) {
  const detailsElement = summaryElement.parentElement;
  const allDetails = document.querySelectorAll(".categories");

  allDetails.forEach(details => {
      if (details !== detailsElement) {
          details.open = true;
      }
  });

  if (detailsElement.open) {
      // Прокрутка до верху сторінки
      window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
