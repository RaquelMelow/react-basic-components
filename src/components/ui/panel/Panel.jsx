import React from "react";
import './Panel.css';

function Panel ({ header, footer, title, text, mode, children }) { 
    return (
        <div className={`panel panel-${mode}`}>
            {header && <div className="panel-header">{header}</div>}
            {(title || text || children) && (
                <div className="panel-body">
                    {title && <h2 className="panel-title">{title}</h2>}
                    {text} 
                    {children}
                </div>
            )}
            {footer && <div className="panel-footer">{footer}</div>}
        </div>
    );
}

Panel.defaultProps = {
    mode: 'primary'
};

export default Panel;
