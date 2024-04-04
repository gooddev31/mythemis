"use client";
import { error } from 'console';
import { useEffect, useRef } from 'react';

const App: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (container && typeof window !== 'undefined') {
            import('pspdfkit').then((PSPDFKit) => {
                if (PSPDFKit) {
                    PSPDFKit.unload(container);
                }

                PSPDFKit.load({
                    locale: 'en',
                    licenseKey: "X7O27Pu7jgC4zIWrcImxH4MuRNO4Yte-_uqmBuk-jK_iP_IiJ0rqPuXHlPJ44mgkcEEAPPPdXU3QVTUx-0SaCmtpgqd9xL1Fyfmo7AweYc-nrp6eknCRZ35A4IBXlhyfb7oVefIUwnxFdY51cDRAox-E3y9i1vnl0tMWEc-JwRU6i3HWlHEl8AuglQ_zx42eDKqN741XAae8YHF6",
                    container,
                    initialViewState: new PSPDFKit.ViewState({
                        // readOnly: true,
                        showToolbar: false,
                        zoom: PSPDFKit.ZoomMode.FIT_TO_WIDTH
                    }),

                    document: '/document.pdf',
                    baseUrl: `${window.location.protocol}//${window.location.host}/`,

                }).then((instance) => {

                    console.info("PSPDFKit loaded", instance);

                    function toggleReadOnly( shouldBeReadOnly) {
                        // перевірка, чи параметр shouldBeReadOnly є булевим значенням
                        if (typeof shouldBeReadOnly !== 'boolean') {
                          console.error('Parameter shouldBeReadOnly must be a boolean.');
                          return;
                        }
                      
                        // Отримання поточного стану viewState
                        const currentViewState = instance.viewState;
                      
                        // Зміна властивості readOnly
                        const updatedViewState = currentViewState.set("readOnly", shouldBeReadOnly);
                      
                        // Застосування зміненого viewState
                        instance.setViewState(updatedViewState);
                      
                        console.log(`ReadOnly mode has been ${shouldBeReadOnly ? 'enabled' : 'disabled'}.`);
                      }
                       window.toggleReadOnly= toggleReadOnly;


                }).catch((error) => {
                    console.log("error:" + error.message);

                });
            });
        }
    }, []);

    return <div className='pdfKit' ref={containerRef} style={{ height: '100vh', width: '100%' }} />;
};

export default App;