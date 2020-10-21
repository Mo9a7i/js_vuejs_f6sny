<template>
  <div
    class="modal fade"
    id="jokeModal"
    tabindex="-1"
    aria-labelledby="jokeModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h5 class="modal-title" id="jokeModalLabel">عندك نكتة؟</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="user-info text-left">
              <small
                >سيتم نشر النكتة بإسم: زائر | <a href="#">مساعدة؟</a></small
              >
            </div>
            <div class="joke-content">
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="jokeContent"
                  rows="6"
                ></textarea>
              </div>
            </div>
            <div class="characters-info text-left">
              <small>عدد الحروف: 9</small>
            </div>
            <div class="categories-info">
              <h5>التصنيفات</h5>
              <small>لازم تختار تصنيف واحد عالأقل</small>
              <div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1"
                    >1</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >2</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                    disabled
                  />
                  <label class="form-check-label" for="inlineCheckbox3"
                    >3 (disabled)</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success btn-block">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
