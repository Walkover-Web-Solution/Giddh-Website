import { MdClose } from "react-icons/md";
import { Modal } from "bootstrap";
import { useEffect, useState } from "react";

const featureGalleryModal = (props) => {  
  const link = props.path;
  var featureGalleryModal;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      featureGalleryModal = new Modal(document.getElementById("featureModal"), {
        backdrop: "static",
        keyboard: false,
      });
      featureGalleryModal.toggle();
    }
  });

  return (
    <>
      <div
        className="modal fade"
        id="featureModal"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered feature_gallery_modal">
          <div className="modal-content">
            <div className="modal-header position-relative">
              <button
                type="button"
                className="btn col-blue ms-auto p-0"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => props.hideFeatureGalleryModal()}
              >
                <MdClose />
              </button>
            </div>
            <div className="modal-body">
              <h4 className="c-fs-1 c-fw-600 col-blue mb-4">
                {props.modalData?.heading}
              </h4>
              <h5 className="c-fs-3 c-fw-600 col-primary">
                {props.modalData?.subHeading}
              </h5>
              {props.modalData?.paragraph !== "" ? (
                <>
                  <p className="col-grey-deep mt-4">
                    {props.modalData?.paragraph}
                  </p>
                </>
              ) : null}
              {props.modalData?.link !== "" ? (
                <>
                  <a
                    href={link.linkPrefix + "/" + props.modalData?.link}
                    className="col-blue d-inline-block mt-1"
                  >
                    More details
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default featureGalleryModal;
