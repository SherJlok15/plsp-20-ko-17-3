import React from 'react';
import Modal from 'react-modal';

import './HelpInformationModal.scss';

Modal.setAppElement('#root');

const HelpInformationModal = ({
  startHelpModalTimer,
  help_modal_is_open, setHelpModalIsOpenBool,
  help_modal_information, help_modal_timer,
  helpModalChangePage,
  ...props
}) => {

  return (

    <Modal isOpen={help_modal_is_open} onRequestClose={() => startHelpModalTimer(1)}>
      <div className="page-container">
        <div className="help-information-modal">
          <div className="help-information-modal__timer title_2">
            <span>{help_modal_timer}</span>
            <button
              className="test-button"
              onClick={() => startHelpModalTimer(1)}
            >
              Закрити
            </button>
          </div>
          {
            help_modal_information.length === 0 ?
            ''
            :
            help_modal_information.map(item =>
              <>
              {
                item.title ?
                  <h2 className="title_2 help-information-modal__title">{item.title}</h2>
                  :
                  ''
              }

              {
                item.text ?
                  item.text.map(part =>
                    <div className="title_3 help-information-modal__text">
                      <div className="text-title">
                        {
                          part.text_title ?
                            part.text_title
                            :
                            ''
                        }
                      </div>


                        {
                          part.text_title && part.text_content ?
                          <div className="arrow">&#8595;</div>
                          :
                          ''
                        }


                      <div className="text-content">
                        {
                          part.text_content ?
                            part.text_content
                            :
                            ''
                        }
                      </div>

                      <div className="text-url">
                        {
                          part.url ?
                            <button onClick={() => helpModalChangePage(part.url, props.history)}>Перейти</button>
                            :
                            ''
                        }
                      </div>

                    </div>
                  )
                  :
                  ''

              }
              </>
            )
          }
        </div>
      </div>
    </Modal>
  )
}

export default HelpInformationModal;
